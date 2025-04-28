import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from  '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-past-viewings',
  imports: [CommonModule, MaterialModule, FlexLayoutModule, FormsModule],
  templateUrl: './past-viewings.component.html',
  styleUrl: './past-viewings.component.css'
})
export class PastViewingsComponent {

}
