import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user';
import { SpotifyService } from './spotify.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BootsAndCatsService {


loginUser: User = {} as User;

// dependency injection
  constructor(private httpClient: HttpClient, 
    private spotifyService: SpotifyService,
    private router: Router) { }


  setUser = (userInput: User): void => {
    this.loginUser = userInput;
  }

  logOut = (): void => {
    this.loginUser = {} as User;
    this.router.navigate(['/login']);
    console.log(this.loginUser);
    
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

