import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../Models/movie";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HttpMovieService {

  private url = 'http://localhost:5001/';

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]>
  {
    return this.http.get<Movie[]>(this.url + 'api/movie').pipe(tap(console.log));
  }
}
