import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchFeature } from '../interfaces/search-feature';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private httpClient: HttpClient) { }

  client_id: string =  "59a2dea8cf794f3494f77b182096c100"; 
  client_secret: string = "29e6648865d948c0b884599dcf6ca6f1";
  clientInfo: string = window.btoa(this.client_id + ':' + this.client_secret)

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
    "Authorization" : "Bearer BQD9_R_IdLWvN3TrNuQfPj2IJ7AveLpsnWPrsApHdHwIWYu8oqqNWcFinULOY7aYZkNkmchdlolgWsd0HVV0BjxTCokdBFTpnRNepXZhzYsQHL8EBuVSjwWsXmLWnCCDWm_RfQAtWEBp_LDBrvZOOHdPpiTTjdOcK1-ZHnUgmgGXm9yzzF-eK6TdmEu1dvh-fFrk_TjOibseZjeMAdnv2zVqILHh_AWdBUHDLBwoc47r6xCcsg-_0c140w", //this is where we will be pasting our token from postman for right now
  });

  getAllAlbums(searchQuery: string): Observable<SearchFeature>{ //search feature that takes in an album name and returns a SearchFeature
    const albumURL = `https://api.spotify.com/v1/search?q=${searchQuery}&type=album&market=US&limit=10&offset=5`;

    console.log(albumURL);
    console.log(this.headers);
    
    return this.httpClient.get<SearchFeature>(albumURL, {headers: this.headers});
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
  
  

