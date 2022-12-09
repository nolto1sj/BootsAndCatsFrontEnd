import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BootsAndCatsBackendService } from '../services/boots-and-cats-backend.service';
import { User } from '../interfaces/user';
import { BootsAndCatsService } from '../services/boots-and-cats.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUser: User = {} as User
  allUsers: User[] = [];

  constructor(
    private router: Router,
    private service: BootsAndCatsBackendService,
    private frontEndService: BootsAndCatsService
  ) {}

  ngOnInit(): void {
    (<HTMLLinkElement>document.getElementById('theme')).href =
      'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.2.2/darkly/bootstrap.min.css';
    this.service.getAllUser().subscribe((data: User[]) => {
      this.allUsers = data;
    });
  }

  selectedUser: User = {} as User;

  selectUser(userForm: User): void {
    for (let user of this.allUsers) {
      if (
        userForm.userName === user.userName &&
        userForm.password === user.password
      ) {
        this.selectedUser = user;
        this.router.navigate(['/review']);
        console.log(this.selectedUser.firstName);
        this.frontEndService.setUser(this.selectedUser)
        break;
      } 
      else if (userForm.userName === user.userName || userForm.password === user.password){
        alert("Username or password is incorrect");
        break;
      }
      else if (userForm.userName == '' || userForm.password == '' || userForm.userName == null || userForm.password == null) {
          alert('Please enter both username and password');
          break;
      }
      else {
        if (!this.selectedUser.userName) {
          alert("User does not exist")
          break;
        }
        break;
      }
    }
  }

  signUpRedirect(): void {
    this.router.navigate(['/signup']);
  }
}
