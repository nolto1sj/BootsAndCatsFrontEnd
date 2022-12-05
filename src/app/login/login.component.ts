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
  constructor(
    private router: Router,
    private service: BootsAndCatsBackendService
  ) {}

  allUsers = this.service.getAllUser;


  ngOnInit(): void {
    (<HTMLLinkElement>document.getElementById("theme")).href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.2.2/darkly/bootstrap.min.css"
  }

  selectedUser: User = {} as User;

  selectUser(userForm: User): void {
    for (let i = 0; i < this.allUsers.length; i++) {
      if (userForm.UserName && userForm.Password == (this.allUsers as any)[i].UserName && (this.allUsers as any)[i].Password)
      {
        (this.allUsers as any)[i] = this.selectedUser;
      }
    }
  }

  signUpRedirect(): void {
    this.router.navigate(['/signup']);
  }
}
