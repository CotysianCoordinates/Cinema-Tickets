import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from  '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { UserService } from '../../user.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, MaterialModule, FlexLayoutModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  errorExists = false;
  errorText = "";

  constructor(public userService : UserService, private router : Router) {}

  ngOnInit() {

  }

  onSubmit(form : NgForm) {
    var email = form.value.email;
    var password = form.value.password;
    var user = this.userService.getUser(email);
    if (!user) {
      this.errorExists = true;
      this.errorText = "There is no registered user with email " + email;
      return;
    }
    var isPasswordValid = this.userService.isPasswordCorrect(email, password);
    if (!isPasswordValid) {
      this.errorExists = true;
      this.errorText = "Password is incorrect";
      return;
    }
    this.errorExists = false;
    this.router.navigate(['']);
  }
}
