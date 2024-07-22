import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HPMoviesRoutingModule } from './hpmovies-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './Services/movie-service.service';
import { BudgetPipe } from '../Pipes/budget.pipe';
import { DurationPipe } from '../Pipes/duration.pipe';
import { MoviesComponent } from './Component/movies/movies.component';
import { MovieDetailsComponent } from './Component/movie-details/movie-details.component';


@NgModule({
  declarations: [BudgetPipe,
    DurationPipe,
    MoviesComponent,
    MovieDetailsComponent],
  imports: [
    CommonModule,
    HPMoviesRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers:[MovieService],
  bootstrap:[HPMoviesModule]
})
export class HPMoviesModule { }
