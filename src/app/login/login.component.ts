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
  loginUser = this.frontEndService.loginUser;
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
    // console.log(userForm);

    // console.log(this.allUsers.length);
    // console.log(this.allUsers[0])

    for (let user of this.allUsers) {
      console.log(user);

      if (
        userForm.userName === user.userName &&
        userForm.password === user.password
      ) {
        this.selectedUser = user;
        this.router.navigate(['/review']);
        console.log(this.selectedUser.firstName);
        break;
      } 
    }
    if(!this.selectedUser){
      alert('Username or password not correct!');
    }
  }

  signUpRedirect(): void {
    this.router.navigate(['/signup']);
  }
}
