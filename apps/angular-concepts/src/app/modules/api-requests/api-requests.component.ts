import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../services/users.service';
import { Observable } from 'rxjs';
import { User } from '../../model';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-requests.component.html',
  styleUrls: ['./api-requests.component.scss'],
})
export class ApiRequestsComponent implements OnInit {

  usersPromise: User[];

  users$: Observable<User[]>;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    // Promise example (not the best way)
    this.usersService
      .getUsersViaPromise()
      .then((users) => {
        this.usersPromise = users;
      })
      .catch(() => {
        this.usersPromise = [];
      });

    // The Angular way using async pipe in template
    this.users$ = this.usersService.getUsersObservable();
  }
}
