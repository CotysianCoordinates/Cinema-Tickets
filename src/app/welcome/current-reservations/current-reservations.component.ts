import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from  '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms'; 
import { Movie } from '../../welcome/movie.model';
import { MovieService } from '../../welcome/movie.service';
import { Reservation } from '../../reservation.model';
import { ReservationService } from '../../reservation.service';
import { User } from '../../user.model';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-current-reservations',
  imports: [CommonModule, MaterialModule, FlexLayoutModule, FormsModule],
  templateUrl: './current-reservations.component.html',
  styleUrl: './current-reservations.component.css'
})
export class CurrentReservationsComponent implements OnInit{

  reservations !: Reservation[] | null;
  constructor(private movieService : MovieService, private userService : UserService, private reservationService : ReservationService, private router : Router) { }

  ngOnInit() {
      this.reservations= this.userService.getReservationsToLoad();
    }
  

  getMovieImage(title: string): string | undefined {
    var movie : Movie | undefined = this.movieService.getMovieByTitle(title);
    return movie.imageUrl;
  }

  updateReservation(reservation: Reservation){
    this.reservationService.setReservationToLoad(reservation);
    this.router.navigate(['new reservation']);
  }

}
