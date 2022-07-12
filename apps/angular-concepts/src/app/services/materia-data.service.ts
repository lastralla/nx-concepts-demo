import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Element } from '../model';

@Injectable()
export class MaterialDataService {

  constructor(
    private http: HttpClient
  ) { }

  getElements(): Observable<Element[]> {
    return this.http.get<Element[]>('api/elements');
  }
}
