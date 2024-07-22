import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../Model/Movie';
import { MovieService } from '../../Services/movie-service.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  movies: Movie[] =[];
  filteredMovies:Movie[] =[];
  titleFilter: string= '';
  releaseYearFilter: string = '';
 
  @Input("movie") movie: Movie | undefined;
  
  constructor(private movieService: MovieService,
     private route: Router
  ){}
 
  ngOnInit() {
   this.movieService.getMovies().subscribe(movies =>{
     this.movies =movies;
     this.applyFilters();
   })
  }
  loadMovies(){
   this.movieService.getMovies().subscribe(movies =>{
     this.movies =movies;})
  }
 
  navigateToDetails(movieid?:number){
   this.route.navigate(['/movies',movieid])
  }
 
  applyFilters(){
   this.filteredMovies= this.movies.filter((movie: Movie)=>
     movie?.title?.toLowerCase().includes(this.titleFilter.toLowerCase()) &&
     this.filterByYear(movie?.release_date));
  }
 
  filterByYear(releasedate: string): boolean {
   if(this.releaseYearFilter || releasedate){
     return true;
   }
   const yearFromReleaseDate= new Date(releasedate).getFullYear().toString();
   return yearFromReleaseDate.includes(this.releaseYearFilter);
  }
}
