import { Component, OnInit } from '@angular/core';
import {HttpMovieService} from "../Services/http-movie.service";

@Component({
  selector: 'app-display-movie',
  templateUrl: './display-movie.component.html',
  styleUrls: ['./display-movie.component.css']
})
export class DisplayMovieComponent implements OnInit {

  constructor(private http: HttpMovieService) { }

  ngOnInit(): void {
  }

  get()
  {
    this.http.getAllMovies().subscribe();
  }
}
