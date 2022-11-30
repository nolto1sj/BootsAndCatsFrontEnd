import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Albums } from './interfaces/album';
import { Review } from './interfaces/review';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class BootsAndCatsService {

  //Each developer will have to modify per-swagger
  backendURL: string = 'https://localhost:7274/api';

// dependency injection
  constructor(private httpClient: HttpClient) { }

  //Method to get albums
  getAlbums(): Observable<Albums>{

  // Not sure if this is the correct link
    return this.httpClient.get<Albums>("https://api.spotify.com/v1/albums");
  }

  //Method to get reviews
  getReviews = (): Observable<Review[]> => {
    return this.httpClient.get<Review[]>(this.backendURL + "/reviews")
  }

  //Method to add a review
  addReview = (review: Review): Observable<Review> =>{
    return this.httpClient.post<Review>(this.backendURL + "/reviews", review)
  }

  //Method to delete a review
  deleteReview = (id: number): Observable<void> => {
    return this.httpClient.delete<void>(this.backendURL + "/reviews/" + id);
  }

  //do we need a list of users or just user info
  getUserProfile = () => {
    return this.httpClient.get<User>(this.backendURL + "/profile")
  }

  //Method to signup
  signup = (user: User): Observable<User> =>{
    return this.httpClient.post<User>(this.backendURL + "/signup", user)
  }

}
