import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/service/movie-service/movie-service.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  movie: any | undefined

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
    ) { }

  ngOnInit(): void {
    this.getMovie();
  }
  
  getMovie = (): void => {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovieByID(id).subscribe(movie => this.movie = movie);
  }

  keys = (input: object): string[] => {
    return Object.keys(input)
  }

}
