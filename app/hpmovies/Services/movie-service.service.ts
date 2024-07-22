import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../Model/Movie';
import { MovieDetails } from '../Model/movie-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  private apiURL = '/movies';

  constructor(private http:HttpClient) { }

  getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.apiURL);
  }

  getMovieDetails(id: string): Observable<MovieDetails>{
    return this.http.get<MovieDetails>(this.apiURL + "/" + id);
  }
}
