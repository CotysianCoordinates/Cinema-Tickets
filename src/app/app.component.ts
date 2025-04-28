import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet , RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { User } from './user.model';
import { UserService } from './user.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from './auth/profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterModule, MaterialModule, FlexLayoutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cinema-tickets';
  profileOpened : boolean = false;
  constructor(public userService : UserService, private dialog : MatDialog) { }

  openProfile(userId : number) {
    this.profileOpened = true;

    const profileDialog = this.dialog.open(ProfileComponent, {
      disableClose : true,
      width: "30vw",
      data: {user : this.userService.getUserById(userId)}});

      profileDialog.afterClosed().subscribe(result =>{
        this.profileOpened = false;
      })
  }



}



