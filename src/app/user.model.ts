import { Reservation } from "./reservation.model";

export interface User{
    id : number;
    firstName : string;
    lastName : string;
    email : string;
    phoneNumber : string;
    address : string;
    genres : string[];
    password : string;
    currentReservations? : Reservation[];
    pastViewings? : Reservation[];
}