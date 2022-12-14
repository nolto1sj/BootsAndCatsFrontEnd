import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchFeature } from '../interfaces/search-feature';
import { SearchArtist } from '../interfaces/search-artist';
import { RelatedArtists } from '../interfaces/related-artists';
import { Albums } from '../interfaces/album';
import { AlbumByIdResponse } from '../interfaces/album-by-id-response';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private httpClient: HttpClient) { }

  client_id: string =  "59a2dea8cf794f3494f77b182096c100"; 
  client_secret: string = "29e6648865d948c0b884599dcf6ca6f1";
  clientInfo: string = window.btoa(this.client_id + ':' + this.client_secret)

  currentAlbumId: string = ''
  currentArtistId: string = ''

  getToken = async (): Promise<string> => {
      const result = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
              'Content-Type' : 'application/x-www-form-urlencoded',
              'Authorization' : 'Basic ' + this.clientInfo
          },
          body: 'grant_type=client_credentials'
      });
      
      const data = await result.json();
      console.log(data.access_token);
      console.log(data);
      
      return data.access_token;
  }

  async getAllAlbums(searchQuery: string): Promise<Observable<SearchFeature>>{ //search feature that takes in an album name and returns a SearchFeature
    const albumURL = `https://api.spotify.com/v1/search?q=${searchQuery}&type=album&market=US&limit=24`;

    console.log(albumURL);
  
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept" : "application/json",
      "Authorization" : `Bearer ${await this.getToken()}` , //this is where we will be pasting our token from postman for right now
    })
  
    console.log(headers);
    return this.httpClient.get<SearchFeature>(albumURL, {headers: headers});

  }

  async getAlbumById(id: string): Promise<Observable<AlbumByIdResponse>>{
    const url = `https://api.spotify.com/v1/albums/${id}?market=US`;

    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept" : "application/json",
      "Authorization" : `Bearer ${await this.getToken()}` , //this is where we will be pasting our token from postman for right now
    })

    return this.httpClient.get<AlbumByIdResponse>(url, {headers: headers})
  }

  async searchArtists(searchQuery: string): Promise<Observable<SearchArtist>>{ //search feature that takes in an artist name and returns a SearchArtist
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept" : "application/json",
      "Authorization" : `Bearer ${await this.getToken()}` , //this is where we will be pasting our token from postman for right now
    })

    const artistURL = `https://api.spotify.com/v1/search?q=${searchQuery}&type=artist&market=US&limit=1`;
    return this.httpClient.get<SearchArtist>(artistURL, {headers: headers});
  }

  async getRelatedArtists(): Promise<Observable<RelatedArtists>>{
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept" : "application/json",
      "Authorization" : `Bearer ${await this.getToken()}` , //this is where we will be pasting our token from postman for right now
    })
    const relatedArtistURL = `https://api.spotify.com/v1/artists/${this.currentArtistId}/related-artists`;
    return this.httpClient.get<RelatedArtists>(relatedArtistURL, {headers: headers})
  }
}
