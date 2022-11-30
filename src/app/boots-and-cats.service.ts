import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Albums } from './interfaces/album';

@Injectable({
  providedIn: 'root'
})
export class BootsAndCatsService {

  constructor(private httpClient: HttpClient) { }
  getAlbums(): Observable<Albums>{
    // Not sure if this is the correct link
    return this.httpClient.get<Albums>("https://api.spotify.com/v1/albums");
  }
}
