import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchFeature } from '../interfaces/search-feature';
import { SearchArtist } from '../interfaces/search-artist';
import { RelatedArtists } from '../interfaces/related-artists';


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

  getToken = async () => {
      console.log("function entered");
      const result = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
              'Content-Type' : 'application/x-www-form-urlencoded',
              'Authorization' : 'Basic ' + this.clientInfo
          },
          body: 'grant_type=client_credentials'
      });
      
      const data = await result.json();
      console.log("we even got here");
      console.log(data.access_token);
      return data.access_token;
  }

  TOKEN = this.getToken()

  headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Accept" : "application/json",
    "Authorization" : "Bearer BQB19Cdlnw4VX6uMRvfd8S5sbNP5fQ_TSulx9acC3PYyMs2FZos7KCQ0YHbl4yHA6OPpqKSt8X9qVc-st0f1myFyv0Pyf1aw80Gq_rxgdQSnjMKZgGaf8AIeaGuAAvRPbOmYqb9R1pfpTrT83LJJFMgY8f8Te5Zu_G1kgRAItCAOR1bTSr9P2bxQYIP3hTo50Ladq_Cb-8pYoa2LSJF1Iq1nw-3b9DyObp0QFqllra8IhL3t4rkRg4yqLQ", //this is where we will be pasting our token from postman for right now

  });

  getAllAlbums(searchQuery: string): Observable<SearchFeature>{ //search feature that takes in an album name and returns a SearchFeature
    const albumURL = `https://api.spotify.com/v1/search?q=${searchQuery}&type=album&market=US&limit=10`;

    console.log(albumURL);
    console.log(this.headers);
    
    return this.httpClient.get<SearchFeature>(albumURL, {headers: this.headers});
  }

  searchArtists(searchQuery: string): Observable<SearchArtist>{ //search feature that takes in an artist name and returns a SearchArtist
    const artistURL = `https://api.spotify.com/v1/search?q=${searchQuery}&type=artist&market=US&limit=1`;
    return this.httpClient.get<SearchArtist>(artistURL, {headers: this.headers});
  }

  getRelatedArtists(): Observable<RelatedArtists>{
    const relatedArtistURL = `https://api.spotify.com/v1/artists/${this.currentArtistId}/related-artists`;
    return this.httpClient.get<RelatedArtists>(relatedArtistURL, {headers: this.headers})
  }
  
  
  // //Method to get albums
  // displayAlbums(): Observable<Albums>{
  //   const albumURL = 'https://api.spotify.com/v1/albums?limit=10&offset=5'
  //   // Not sure if this is the correct link. Added a limit of 10
  //     return this.httpClient.get<Albums>(albumURL, this.headers);
  //   }
}
























  
  // redirect_uri: string = "https://localhost:4200/index.html"; // change this your value
  // client_id: string = "59a2dea8cf794f3494f77b182096c100"; 
  // client_secret: string = "29e6648865d948c0b884599dcf6ca6f1";

  // authOptions = {
  //   url: 'https://accounts.spotify.com/api/token',
  //   headers: {
  //     'Authorization': 'Basic ' + (new Buffer(this.client_id + ':' + 
  //     this.client_secret).toString('base64'))
  //   },
  //   form: {
  //     grant_type: 'client_credentials'
  //   },
  //   json: true
  // };

  //   request = (this.authOptions, function(error: string, response: string, body: string): Observable<string> {
      
  //   })
  // request.post(this.authOptions, function(error, response, body) {
  //   if (!error && response.statusCode == 200)  {
  //     var token = body.access_token;
  //   }
  // });











  
  // authHeader: HttpHeaders = new HttpHeaders().set('Authorization','')
  // access_token: string = "";
  // refresh_token: string = "";
  // currentPlaylist: string = "";
  // radioButtons = [];
  
  

