import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient
    ) { }

    private moviesURL = (keywords:string[]) => {
      if(keywords.length = 0) return `https://gateway.maverik.com/movie/api/movie/title/keyword?source=omdb`
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

    getMovies = async (keywords: string[]) => {
      return this.http.get(this.moviesURL(keywords))
    }
}
