import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MaterialDataService } from '../../services/materia-data.service';
import { Element } from '../../model';

@Component({
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent implements OnInit {

  displayedColumns: Array<keyof Element> = ['id', 'name'];

  elements$: Observable<Element[]>;

  constructor(private materialDataService: MaterialDataService) {}

  ngOnInit(): void {
    this.elements$ = this.materialDataService.getElements();
  }
}
