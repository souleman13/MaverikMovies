import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie-service/movie-service.service'

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies:any

  constructor(
      private movieService: MovieService
  ) { 
  }

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies(): void {
    this.movies = this.movieService.getMovies().subscribe(movies => {this.movies = movies;console.log(movies)})
  }
}
