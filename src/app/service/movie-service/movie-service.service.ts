import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  keywords: string[] = []
  movies: any[] = []

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

    getMovies = (): Observable<any[]> => {
      return this.http.get<any[]>(this.moviesURL())
    }
}
