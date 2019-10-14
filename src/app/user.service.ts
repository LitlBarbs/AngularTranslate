import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url = './assets/user.json';

  constructor( private http: HttpClient ) { }

  getUser() {
    return this.http.get(this._url);
  }
}
