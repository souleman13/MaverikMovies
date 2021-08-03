import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie-service/movie-service.service'

@Component({
  selector: 'keyword-search',
  templateUrl: './keyword-search.component.html',
  styleUrls: ['./keyword-search.component.css']
})
export class KeywordSearchComponent implements OnInit {

  keywords: string[] = []

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  add(keyword: string): void {
    this.keywords.push(keyword)
  }

  clear(): void {
    this.keywords = []
  }

  search(): void {
    this.movieService.updateMovies(this.keywords)
  }
}
