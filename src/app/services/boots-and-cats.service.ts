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
}
