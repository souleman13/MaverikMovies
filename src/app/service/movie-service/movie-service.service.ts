import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies = new Subject<any[]>()

  constructor(
    private http: HttpClient
    ) { }

    private moviesURL = (keywords?:string[]): string => {
      if(!keywords || keywords.length === 0) return `https://gateway.maverik.com/movie/api/movie/title/keyword?source=omdb`
      let keywordString: string = ''
      keywords.forEach(word => {
        if(keywordString === ''){
          keywordString = `${word}`
        } else {
          keywordString+`,${word}`
        }
      })
      return `https://gateway.maverik.com/movie/api/movie/title/${keywordString}?source=omdb`
    }

    private imdbURL = (imdbID: string) => `https://gateway.maverik.com/movie/api/movie/${imdbID}?source=omdb`

    updateMovies = (keywords?:string[]): void => {
      console.log(keywords)
      console.log(this.moviesURL(keywords))
      this.http.get<any[]>(this.moviesURL(keywords)).subscribe(movies => this.movies.next(movies))
    }

    getMovies = (): Observable<any[]> => {
      return this.movies
    }

    getMovieByID = (imdbID: string): Observable<any> => {
      return this.http.get<any>(this.imdbURL(imdbID))
    }
}
