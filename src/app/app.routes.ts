import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReservationFormComponent } from './reservations/reservation-form/reservation-form.component';
import { CurrentReservationsComponent } from './welcome/current-reservations/current-reservations.component';

export const routes: Routes = [
    {path:"", component: WelcomeComponent},
    {path:"sign up", component: SignupComponent},
    {path:"login", component: LoginComponent},
    {path:"reviews", component: ReviewsComponent},
    {path:"new reservation", component: ReservationFormComponent},
    {path:"current reservations", component: CurrentReservationsComponent}

];
