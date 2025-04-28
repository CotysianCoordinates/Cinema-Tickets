import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from  '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../user.model';
import { UserService } from '../../user.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, MaterialModule, FlexLayoutModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  genres: string[] = [];
  genreOptions = ['Adventure', 'Drama', 'Thriller', 'Animation', 'Sci-Fi', 'Horror', 'Musical', 'Comedy', 'Fantasy', 'Indie', 'Romance'];

  isEditing : boolean = false;
  profileForInput!: User;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public userService : UserService) {
    
  }

  ngOnInit() {
    this.profileForInput = {
      id : this.data.user.id,
      firstName : this.data.user.firstName,
      lastName : this.data.user.lastName,
      email : this.data.user.email,
      phoneNumber : this.data.user.phoneNumber,
      address : this.data.user.address,
      genres : this.data.user.genres,
      password : this.data.user.password,

    }
  }

  finishEditing(form: NgForm) {
    this.data.user.firstName = this.profileForInput.firstName;
    this.data.user.lastName = this.profileForInput.lastName;
    this.data.user.email = this.profileForInput.email;
    this.data.user.phoneNumber = this.profileForInput.phoneNumber;
    this.data.user.address = this.profileForInput.address;
    this.data.user.genres = this.profileForInput.genres;
    this.data.user.password = this.profileForInput.password;

    console.log(this.data.user);
    console.log(this.userService.getUser);
    this.isEditing=false;
  }
  


}
