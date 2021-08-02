import { Component, OnInit } from '@angular/core';
import { KeywordSearchComponent } from '../keyword-search/keyword-search.component'
import { MovieListComponent } from '../movie-list/movie-list.component'

@Component({
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
