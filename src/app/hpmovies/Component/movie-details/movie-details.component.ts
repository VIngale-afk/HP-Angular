import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MovieDetails } from '../../Model/movie-details';
import { MovieService } from '../../Services/movie-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {

  movie: MovieDetails | undefined;

  constructor(private route : ActivatedRoute,
    private router :Router,
    private movieService :MovieService
  ){}

  ngOnInit(){
    const movieid =this.route.snapshot.paramMap.get('id') || '';

    this.movieService.getMovieDetails(movieid).subscribe(movie => {
      this.movie= movie;
    })
  }

  back() :void {
    this.router.navigate(['/movies']);
  }
}
