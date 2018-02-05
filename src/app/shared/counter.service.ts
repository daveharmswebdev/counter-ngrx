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

  getCountById(id) {
    return this.http.get<ICount>(this._baseUrl + 'counts/' + id);
  }

  updateCount(update: ICount) {
    const {id, ...body} = update;
    return this.http.put<ICount>(this._baseUrl + 'counts/' + id, body)
      .toPromise();
  }

  removeCount(id) {
    return this.http.delete(this._baseUrl + 'counts/' + id).toPromise();
  }

  addCount(body) {
    return this.http.post(this._baseUrl + 'counts', body).toPromise();
  }

}
