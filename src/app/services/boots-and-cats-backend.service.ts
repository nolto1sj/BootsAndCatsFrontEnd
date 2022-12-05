import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user'
import { Observable } from 'rxjs';
import { Review } from '../interfaces/review';


@Injectable({
  providedIn: 'root'
})
export class BootsAndCatsBackendService {

  //Each developer will have to modify per-swagger
  backendURL: string = 'http://localhost:5056/api';

  constructor(private httpClient: HttpClient) { }
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
  
    //get user by id
    getUserProfile = (id: number): Observable<User> => {
      return this.httpClient.get<User>(this.backendURL + "/Users/" + id);
    }

    //get all users
    getAllUser = (): Observable<User[]> => {
      return this.httpClient.get<User[]>(this.backendURL + "/Users/");
    }
  
    //Method to signup
    signup = (user: User): Observable<User> =>{
      return this.httpClient.post<any>(this.backendURL + "/Users", user);
    }
}
