import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UrlSerializer } from '@angular/router';
import { User } from '../interfaces/user';
import { BootsAndCatsBackendService } from '../services/boots-and-cats-backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
// @Output() userSave = new EventEmitter<User>();


//   FirstName: string ='';
//   LastName: string = '';
//   UserName: string = '';
//   Password: string = '';

  constructor(private service: BootsAndCatsBackendService, private router: Router) { }
  newUser: User = {} as User;

  ngOnInit(): void {
  }

  addUser = (user: User): void => {
    this.service.signup(user).subscribe();
  }

onSubmit(){
  if(!this.newUser.firstName || !this.newUser.lastName || !this.newUser.userName || !this.newUser.password) {
    alert("Please fill out all fields to create a user")
  } else {
    this.service.signup(this.newUser)
    .subscribe(
      data => alert('Successfully signed up!'),
      error => alert('Error with signing up!')
    )
    
    this.router.navigate(['/login']);
  }
}

}
