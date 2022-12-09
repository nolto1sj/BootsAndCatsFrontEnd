import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { Review } from '../interfaces/review';
import { BootsAndCatsService } from './boots-and-cats.service';

@Injectable({
  providedIn: 'root',
})
export class BootsAndCatsBackendService {
  //Each developer will have to modify per-swagger
  backendURL: string = 'https://localhost:7274/api';

  constructor(
    private httpClient: HttpClient,
    private frontEndService: BootsAndCatsService
  ) {}
  //Method to get reviews
  getReviews = (): Observable<Review[]> => {
    return this.httpClient.get<Review[]>(this.backendURL + '/reviews');
  };

  //get all users
  getAllUser = (): Observable<User[]> => {
    return this.httpClient.get<User[]>(this.backendURL + '/Users/users');
  };

  //Method to signup
  signup = (user: User): Observable<User> => {
    return this.httpClient.post<any>(this.backendURL + '/Users', user);
  };
  //Method to add a review
  addReview = (review: Review): Observable<Review> => {
    return this.httpClient.post<Review>(
      this.backendURL + '/reviews/add',
      review
    );
  };

  //Method to delete a review
  deleteReview = (id: number): Observable<void> => {
    return this.httpClient.delete<void>(this.backendURL + '/reviews/' + id);
  };

  //get user by id
  getUserProfile = (id: number): Observable<User> => {
    return this.httpClient.get<User>(this.backendURL + '/Users/' + id);
  };

  UpdateByUserName = (user: User): Observable<User> => {
    return this.httpClient.put<any>(this.backendURL + '/Users', user);
  };

  UpdateUser = (user: User): Observable<void> => {
    return this.httpClient.put<void>(
      this.backendURL + '/Users/changeuser',
      user
    );
  };
}
