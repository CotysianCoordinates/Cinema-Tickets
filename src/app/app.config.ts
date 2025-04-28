import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { MovieService } from './welcome/movie.service';
import { UserService } from './user.service';
import { ReviewService } from './review.service';
import { ReservationService } from './reservation.service';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimations(), MovieService, UserService, ReviewService, ReservationService]
};
