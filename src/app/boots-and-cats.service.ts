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


// dependency injection
  constructor(private httpClient: HttpClient) { }

  //Method to get albums
  getAlbums(): Observable<Albums>{

  // Not sure if this is the correct link
    return this.httpClient.get<Albums>("https://api.spotify.com/v1/albums");
  }

}
