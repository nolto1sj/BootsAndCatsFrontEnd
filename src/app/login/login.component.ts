import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@auth0/auth0-angular';
import { BootsAndCatsBackendService } from '../services/boots-and-cats-backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private service: BootsAndCatsBackendService) { }

  selectedUser: User= this.selectUser;
  allUsers = this.service.getAllUser();

  ngOnInit(): void {
  }

selectUser(user: User): {


 
}


  signUpRedirect(): void {
    this.router.navigate(['/signup']);

  }
}
