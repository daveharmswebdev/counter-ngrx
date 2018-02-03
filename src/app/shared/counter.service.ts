import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ICount } from '../models/count';

@Injectable()
export class CounterService {
  private _baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getCounts() {
    return this.http.get<ICount>(this._baseUrl + 'counts');
  }

}
