import { Component, OnInit } from '@angular/core';
import { MaterialModule } from  '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, NgForm } from '@angular/forms';
import { Reservation } from '../../reservation.model';
import { ReservationService } from '../../reservation.service';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../user.model';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-reservation-form',
  imports: [MaterialModule, FlexLayoutModule, FormsModule],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})

export class ReservationFormComponent implements OnInit{

  reservation !: Reservation;
  dateString = '';
  timeString = '';

  constructor(private reservationService : ReservationService, private userService : UserService, private router : Router) {

  }

  ngOnInit() {
    this.reservation = this.reservationService.getReservationToLoad();
    this.dateString = this.formatDate(this.reservation.screeningDate);
    this.timeString = this.formatTime(this.reservation.screeningTime);
  }

  onSubmit(form : NgForm) {
    var newReservation : Reservation = this.reservationService.addReservation(form.value.title,
                                                  form.value.screeningDate,
                                                  form.value.screeningTime,
                                                  form.value.ticketPrice,
                                                  form.value.ticketQuantity);
    this.userService.addReservation(newReservation);
    this.router.navigate(['']);
  }

  formatDate(date: Date): string {
    return date.toISOString().split('T')[0]; // 'YYYY-MM-DD'
  }

  formatTime(date: Date): string {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`; // 'HH:MM'
  }


}
