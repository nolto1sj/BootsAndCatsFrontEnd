import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BootsAndCatsBackendService } from '../services/boots-and-cats-backend.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
loginUser: User = {} as User;
allUsers: User[] = [];

  constructor(
    private router: Router,
    private service: BootsAndCatsBackendService
  ) {}

  


  ngOnInit(): void {
    (<HTMLLinkElement>document.getElementById("theme")).href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.2.2/darkly/bootstrap.min.css";
    this.service.getAllUser().subscribe((data: User[]) => {this.allUsers = data});
  }

  selectedUser: User = {} as User;

  selectUser(userForm: User): void {
    console.log(userForm);
    
    console.log(this.allUsers.length);
    

    for (let i = 0; i < this.allUsers.length; i++) { 
      // if (userForm.UserName && userForm.Password == this.allUsers[i].UserName && this.allUsers[i].Password)
      if (userForm.UserName === this.allUsers[i].UserName)
      {
        this.selectedUser = this.allUsers[i];
        this.router.navigate(['/review']);
        console.log(this.selectedUser.FirstName);
        
      }
      else {
        alert("Username or password not correct!");
        console.log(this.selectedUser.FirstName);
        break;
      }
    }
  }

  signUpRedirect(): void {
    this.router.navigate(['/signup']);
  }
}
