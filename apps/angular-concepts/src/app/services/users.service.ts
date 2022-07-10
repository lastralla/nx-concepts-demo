import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) {}

  private endpoint = 'api';

  getUsersViaPromise(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      return this.http
        .get<User[]>(`${this.endpoint}/users`)
        .toPromise()
        .then((res: User[]) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        })
    });
  }

  getUsersObservable(): Observable<User[]> {
    return this.http
      .get<User[]>(`${this.endpoint}/users`)
      .pipe(
        // Error handling option: remove pipe to catch error and handle in component
        catchError((error) => {
          // Simple option: catch error in service and return a better value (like empty array)
          // return of([]);

          // Another option: pass on the error (with friendlier message)
          return throwError(new Error(error.message));
        })
      );
  }
}
