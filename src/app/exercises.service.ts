import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  private _url = './assets/exercises.json';

  constructor( private http: HttpClient ) { }

  getExercises() {
    return this.http.get(this._url);
  }
}
