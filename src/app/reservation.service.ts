import { Injectable } from "@angular/core";
import { Reservation } from "./reservation.model";
import { Movie } from "./welcome/movie.model";

@Injectable()
export class ReservationService{

    private reservations = new Map();
    private dummyReservation !: Reservation;

    addReservation(title : string, screeningDate : Date, screeningTime : Date, ticketPrice : number, ticketQuantity : number): Reservation {
        var ticketNumber = 0;

        while (this.reservations.has(ticketNumber) || ticketNumber == 0) {
            ticketNumber = this.generateTicketNumber();
        }
        var newReservation : Reservation = {title, screeningDate, screeningTime, ticketPrice, ticketQuantity, ticketNumber};
        this.reservations.set(ticketNumber, newReservation);
        return newReservation;
    }

    getAllReservations(): Reservation[] {
        return [...this.reservations.values()];
    }

    getReservation(ticketNumber : number): Reservation | undefined {
        return this.reservations.get(ticketNumber);
    }

    updateReservation(oldTicketNumber : number, title: string, screeningDate: Date, screeningTime: Date, ticketPrice : number, ticketQuantity : number): Reservation | undefined {
        this.reservations.delete(oldTicketNumber);
        var newReservation : Reservation = this.addReservation(title, screeningDate, screeningTime, ticketPrice, ticketQuantity);
        return newReservation;
    }

    deleteReservation(ticketNumber : number): void {
        this.reservations.delete(ticketNumber);
        console.log("Reservation Deleted");
    }

    generateTicketNumber(): number {
        return Math.floor(100000000 + Math.random() * 900000000);
    }

    reservationToLoad(movie : Movie, screeningTime : Date) : Reservation {
        var title : string = movie.title;
        var screeningDate : Date = movie.screeningDate;
        var screeningTime : Date = screeningTime;
        var ticketPrice : number = movie.ticketPrice;
        var ticketQuantity : number = 1;
        var ticketNumber : number = 0;

        var newReservation : Reservation = {title : title, screeningDate : screeningDate, screeningTime : screeningTime, ticketPrice : ticketPrice, ticketQuantity : ticketQuantity, ticketNumber : ticketNumber};
        this.dummyReservation = newReservation;
        return newReservation;
    }

    getReservationToLoad(): Reservation {
        return this.dummyReservation;
    }

    setReservationToLoad(reservation : Reservation): Reservation {
        this.dummyReservation = reservation;
        return reservation;
    }
}