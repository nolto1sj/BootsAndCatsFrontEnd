import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UrlSerializer } from '@angular/router';
import { User } from '../interfaces/user';
import { BootsAndCatsBackendService } from '../services/boots-and-cats-backend.service';

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

  constructor(private service: BootsAndCatsBackendService) { }
newUser: User = {} as User;

  ngOnInit(): void {
  }

  // submit = (): void => {
  //   this.userSave.emit({
  //     FirstName: this.FirstName,
  //     LastName: this.LastName,
  //     UserName: this.UserName,
  //     Password: this.Password
  //   });
  //   this.FirstName = '';
  //   this.LastName = '';
  //   this.UserName = '';
  //   this.Password = '';
  // };

  addUser = (user: User): void => {
    this.service.signup(user).subscribe();
  }

// addUser(formParam: NgForm): void {
//   let newUser: User = {
//     FirstName: formParam.form.value.fname,
//     LastName: formParam.form.value.lname,
//     UserName: formParam.form.value.uname,
//     Password: formParam.form.value.pass
//   }

//   this.service.signup(newUser);
// }

onSubmit(){
  this.service.signup(this.newUser).subscribe();
  
}

}
