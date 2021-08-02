import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie-service/movie-service.service'
@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies = [{
    "title": "Are All Men Pedophiles?",
    "year": "2013",
    "rated": null,
    "released": null,
    "runtime": null,
    "genre": null,
    "director": null,
    "writer": null,
    "actors": null,
    "plot": null,
    "language": null,
    "country": null,
    "imdbVotes": null,
    "imdbID": "tt2072045",
    "poster": "https://m.media-amazon.com/images/M/MV5BNjY0NzU3MzQ1NF5BMl5BanBnXkFtZTcwNzg5NTA4OQ@@._V1_SX300.jpg",
    "imdbRating": null,
    "type": "movie"
},
{
    "title": "All Things to All Men",
    "year": "2013",
    "rated": null,
    "released": null,
    "runtime": null,
    "genre": null,
    "director": null,
    "writer": null,
    "actors": null,
    "plot": null,
    "language": null,
    "country": null,
    "imdbVotes": null,
    "imdbID": "tt2095568",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTQyMDkwNTcwOF5BMl5BanBnXkFtZTgwMDY3MTAwMTE@._V1_SX300.jpg",
    "imdbRating": null,
    "type": "movie"
},
{
    "title": "All Men Are Brothers",
    "year": "1975",
    "rated": null,
    "released": null,
    "runtime": null,
    "genre": null,
    "director": null,
    "writer": null,
    "actors": null,
    "plot": null,
    "language": null,
    "country": null,
    "imdbVotes": null,
    "imdbID": "tt0071389",
    "poster": "https://m.media-amazon.com/images/M/MV5BYTJlYzlkMWItNThmZC00YWI3LWE1MDQtY2RiOTMwMzJmNjA5XkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg",
    "imdbRating": null,
    "type": "movie"
},
{
    "title": "All Men Are Liars",
    "year": "1995",
    "rated": null,
    "released": null,
    "runtime": null,
    "genre": null,
    "director": null,
    "writer": null,
    "actors": null,
    "plot": null,
    "language": null,
    "country": null,
    "imdbVotes": null,
    "imdbID": "tt0112322",
    "poster": "https://m.media-amazon.com/images/M/MV5BMjA0ODQwNzQ4N15BMl5BanBnXkFtZTYwMzQxOTM3._V1_SX300.jpg",
    "imdbRating": null,
    "type": "movie"
},
{
    "title": "A Woman for All Men",
    "year": "1975",
    "rated": null,
    "released": null,
    "runtime": null,
    "genre": null,
    "director": null,
    "writer": null,
    "actors": null,
    "plot": null,
    "language": null,
    "country": null,
    "imdbVotes": null,
    "imdbID": "tt0316900",
    "poster": "https://m.media-amazon.com/images/M/MV5BNWQyMmE0MDUtMDI1Mi00ZjIyLTllNGItYTM2ODM3YzA1ZDk0XkEyXkFqcGdeQXVyNjg3MTIwODI@._V1_SX300.jpg",
    "imdbRating": null,
    "type": "movie"
},
{
    "title": "All Men Are Mortal",
    "year": "1995",
    "rated": null,
    "released": null,
    "runtime": null,
    "genre": null,
    "director": null,
    "writer": null,
    "actors": null,
    "plot": null,
    "language": null,
    "country": null,
    "imdbVotes": null,
    "imdbID": "tt0112323",
    "poster": "https://m.media-amazon.com/images/M/MV5BMjA3ODMwNzYxNF5BMl5BanBnXkFtZTcwOTE2NDU4MQ@@._V1_SX300.jpg",
    "imdbRating": null,
    "type": "movie"
},
{
    "title": "A Boy Who Wished to Be Okuda Tamio and a Girl Who Drove All Men Crazy",
    "year": "2017",
    "rated": null,
    "released": null,
    "runtime": null,
    "genre": null,
    "director": null,
    "writer": null,
    "actors": null,
    "plot": null,
    "language": null,
    "country": null,
    "imdbVotes": null,
    "imdbID": "tt5739586",
    "poster": "https://m.media-amazon.com/images/M/MV5BNzJiOTdhOTItZDMzZC00NWNkLTg3YTEtNzAwNjdhMmJkZjQzXkEyXkFqcGdeQXVyNjgwNTk4Mg@@._V1_SX300.jpg",
    "imdbRating": null,
    "type": "movie"
},
{
    "title": "Lord, All Men Can't Be Dogs",
    "year": "2011",
    "rated": null,
    "released": null,
    "runtime": null,
    "genre": null,
    "director": null,
    "writer": null,
    "actors": null,
    "plot": null,
    "language": null,
    "country": null,
    "imdbVotes": null,
    "imdbID": "tt1734578",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTEwOTM0NTk1NjdeQTJeQWpwZ15BbWU3MDY3NzI2NjQ@._V1_SX300.jpg",
    "imdbRating": null,
    "type": "movie"
},
{
    "title": "All Men Are Pigs",
    "year": "1991",
    "rated": null,
    "released": null,
    "runtime": null,
    "genre": null,
    "director": null,
    "writer": null,
    "actors": null,
    "plot": null,
    "language": null,
    "country": null,
    "imdbVotes": null,
    "imdbID": "tt0238016",
    "poster": "N/A",
    "imdbRating": null,
    "type": "movie"
},
{
    "title": "All Men are Suspects",
    "year": "2006",
    "rated": null,
    "released": null,
    "runtime": null,
    "genre": null,
    "director": null,
    "writer": null,
    "actors": null,
    "plot": null,
    "language": null,
    "country": null,
    "imdbVotes": null,
    "imdbID": "tt0488592",
    "poster": "https://m.media-amazon.com/images/M/MV5BNzljNzJmNTUtYzM0Ni00ZjFiLTg4MmEtZmI0Y2E4OTFkNTcxXkEyXkFqcGdeQXVyMDM1MzIyMQ@@._V1_SX300.jpg",
    "imdbRating": null,
    "type": "movie"
}]

  constructor(
      private movieService: MovieService
  ) { }

  ngOnInit(): void {
  }

}