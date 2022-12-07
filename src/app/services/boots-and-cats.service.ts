import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class BootsAndCatsService {


loginUser: User = {} as User;

// dependency injection
  constructor(private httpClient: HttpClient) { }


  setUser = (userInput: User): void => {
    this.loginUser = userInput;
  }
  
  hideNavBar = (): boolean => {
  console.log("entered hidnavbar");
  console.log(this.loginUser.userName);
    if (this.loginUser.userName == null){
      return true
    } else {
      return false
    }
  }

  
}

