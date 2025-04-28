import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from  '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ReservationService } from '../../reservation.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [CommonModule, MaterialModule, FlexLayoutModule, FormsModule, RouterModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit, AfterViewInit{

  displayedColumns = ["title", "description", "genre", "duration", "director", "actors", "releaseDate", "screeningDate", "screeningTimes", "ticketPrice", "status", "rating"];
  movieSource = new MatTableDataSource<Movie>();

  @ViewChild(MatSort)
  sort : MatSort = new MatSort;

  @ViewChild(MatPaginator)
  paginator : MatPaginator = new MatPaginator;

  constructor(private movieService : MovieService, private reservationService : ReservationService, private router : Router) { }

  ngOnInit() {
    this.movieSource.data = this.movieService.getMovies();
  }

  ngAfterViewInit(): void {
    this.movieSource.sort = this.sort;
    this.movieSource.paginator = this.paginator;
  }

  doFilter(event : Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.movieSource.filter = filterValue.trim().toLowerCase();
  }

  loadReservationForm(movie : Movie, screeningTime : Date) {
    this.reservationService.reservationToLoad(movie, screeningTime);
    this.router.navigate(['new reservation']);
  }
}
