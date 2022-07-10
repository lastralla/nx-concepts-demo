import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class SimpleService {
  constructor(private httpClient: HttpClient) {}

  autoData$ = this.httpClient.get('https://api.coindesk.com/v1/bpi/currentprice.json');

  getManualData() {
    return this.autoData$;
  }
}
