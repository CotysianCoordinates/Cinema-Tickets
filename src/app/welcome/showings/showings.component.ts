import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from  '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms'; 
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';
import { ReviewService } from '../../review.service';
import { ReservationService } from '../../reservation.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-showings',
  imports: [CommonModule, MaterialModule, FlexLayoutModule, FormsModule],
  templateUrl: './showings.component.html',
  styleUrl: './showings.component.css'
})
export class ShowingsComponent implements OnInit{
  movies: Movie[] = [];

  constructor(private movieService : MovieService, private reviewService : ReviewService, private reservationService : ReservationService, private router : Router) { }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }

  loadReviews(title: string): void{
    this.reviewService.setMovieToLoad(title);
    this.router.navigate(['reviews']);
  }

  loadReservationForm(movie : Movie, screeningTime : Date) {
    this.reservationService.reservationToLoad(movie, screeningTime);
    this.router.navigate(['new reservation']);
  }


}
