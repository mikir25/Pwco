import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../Models/movie";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HttpMovieService {

  private url = 'http://localhost:5001/api/movie';

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]>
  {
    return this.http.get<Movie[]>(this.url);
  }

  getMovie(id: number): Observable<Movie>
  {
    return this.http.get<Movie>(this.url + `/${id}`)
  }

  deleteMovie(id: number): Observable<{}>
  {
    return this.http.delete<{}>(this.url + `/${id}`)
  }

  postMovie(movie: Movie)
  {
    return this.http.post(this.url, movie);
  }

  putMovie(movie: Movie)
  {
    return this.http.put(this.url + `/${movie.id}`, movie);
  }

}
