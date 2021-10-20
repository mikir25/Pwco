import { Component, OnInit } from '@angular/core';
import {Movie} from "../Models/movie";
import {HttpMovieService} from "../Services/http-movie.service";

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit {

  constructor(private http: HttpMovieService) { }

  movie: Movie = new Movie();
  ngOnInit(): void {
  }

  createMovie()
  {
    this.http.postMovie(this.movie).subscribe(
      () => {},
      error => {console.log(error)},
      () => console.log('Compleat post!')
    );
  }
}
