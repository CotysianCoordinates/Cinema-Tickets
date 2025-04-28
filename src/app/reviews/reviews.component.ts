import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from  '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { Review } from '../review.model';
import { ReviewService } from '../review.service';


@Component({
  selector: 'app-reviews',
  imports: [CommonModule, MaterialModule, FlexLayoutModule, FormsModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent implements OnInit{
  
  constructor(public reviewService : ReviewService) { }

  reviews : Review[] = [];
  movieTitle : String = "";

  ngOnInit() {
    this.reviews = this.reviewService.loadReviews();
    this.movieTitle = this.reviewService.getCurrentMovie();
  }

}
