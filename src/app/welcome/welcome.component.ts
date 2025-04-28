import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from  '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ShowingsComponent } from "./showings/showings.component";
import { CurrentReservationsComponent } from "./current-reservations/current-reservations.component";
import { PastViewingsComponent } from "./past-viewings/past-viewings.component";
import { SearchComponent } from "./search/search.component"; 

@Component({
  selector: 'app-welcome',
  imports: [CommonModule, MaterialModule, FlexLayoutModule, FormsModule, ShowingsComponent, CurrentReservationsComponent, PastViewingsComponent, SearchComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

}
