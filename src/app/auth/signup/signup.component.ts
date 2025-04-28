import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from  '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgForm, FormsModule } from '@angular/forms';
import { UserService } from '../../user.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-signup',
  imports: [CommonModule, MaterialModule, FlexLayoutModule, FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  genres: string[] = [];
  genreOptions = ['Adventure', 'Drama', 'Thriller', 'Animation', 'Sci-Fi', 'Horror', 'Musical', 'Comedy', 'Fantasy', 'Indie', 'Romance'];

  errorExists = false;
  errorText = "";

  constructor(public userService : UserService, private router : Router) {}

  ngOnInit() {

  }

  onSubmit(form : NgForm) {
    if (!this.userService.getUser(form.value.email)) 
    {
      this.errorExists = false;
      var newUser = this.userService.registerUser(form.value.firstName,
                                                  form.value.lastName,
                                                  form.value.email,
                                                  form.value.phoneNumber,
                                                  form.value.address,
                                                  form.value.genres,
                                                  form.value.password);
      this.router.navigate(['']);
    } else {
      this.errorExists = true;
      this.errorText = "User with this email already exists."
    }
  }

}
