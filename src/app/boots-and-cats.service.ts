import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Albums } from './interfaces/album';

@Injectable({
  providedIn: 'root'
})
export class BootsAndCatsService {
  getAlbumURL: string = "https://api.spotify.com/v1/albums/"
  

// dependency injection
  constructor(private httpClient: HttpClient) { }

  // getAlbumById(id: string): Observable<Albums>{

  //   return this.httpClient.get<Albums>(this.getAlbumURL + id);
  // }

  // getAlbumId(albumName: string): Observable<string>{
  // }
}
