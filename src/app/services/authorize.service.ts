import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchFeature } from '../interfaces/search-feature';


@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {
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

  // private httpOptions = {
  //   headers: new HttpHeaders({
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //     'Authorization': `'Bearer ${this.TOKEN}'`
  //   })
  // }

  headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Accept" : "application/json",
    "Authorization" : "Bearer BQDkObBOD9zjQGGyBJueIWagq5n1skbJWGlUCwDktZVDquw4W6opG345-b_o0JMDRsopHTw-IdshJH1ShYS2Pj_5oeX0FY9mP8DQ8UdCJpuRFrGADQqAf6X9hGY7f-Ig2T-V0ywNBAYR3ZfyRZjudn3xZ7urgM7H9HtvM9jDnpIAmy7wogvQbqHij84pIGdQkLxxbqGRDgzVSP_qW4gs7Lw558sl01rY_uIMNNm6WW19VQrjgPBCVKf_Cg",
  });



  
getAllAlbums(searchQuery: string): Observable<SearchFeature>{
  // let headers = new HttpHeaders();
  // headers.set('Accept', 'application/json');
  // headers.set('Content-Type', 'application/json');
  // headers.set('Authorization', `'Bearer ${this.TOKEN}'`);
  
  
  const albumURL = `https://api.spotify.com/v1/search?q=${searchQuery}&type=album&market=US&limit=10&offset=5`;
  console.log(albumURL);
  console.log(this.headers);
  
    return this.httpClient.get<SearchFeature>(albumURL, {headers: this.headers});
  }

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
  
  // AUTHORIZE: string = "https://accounts.spotify.com/authorize"
  // TOKEN: string = "https://accounts.spotify.com/api/token";


  // PLAYLISTS: string = "https://api.spotify.com/v1/me/playlists";
  // DEVICES: string = "https://api.spotify.com/v1/me/player/devices";
  // PLAY: string = "https://api.spotify.com/v1/me/player/play";
  // PAUSE: string = "https://api.spotify.com/v1/me/player/pause";
  // NEXT: string = "https://api.spotify.com/v1/me/player/next";
  // PREVIOUS: string = "https://api.spotify.com/v1/me/player/previous";
  // PLAYER: string = "https://api.spotify.com/v1/me/player";
  // TRACKS: string = "https://api.spotify.com/v1/playlists/{{PlaylistId}}/tracks";
  // CURRENTLYPLAYING: string = "https://api.spotify.com/v1/me/player/currently-playing";
  // SHUFFLE: string = "https://api.spotify.com/v1/me/player/shuffle";

  // requestAuthorization = (): void => {
  //   localStorage.setItem("client_id", this.client_id);
  //   localStorage.setItem("client_secret", this.client_secret);

  //   let url: string = this.AUTHORIZE;
  //   url += "?client_id=" + this.client_id;
  //   url += "&response_type=code";
  //   url += "&redirect_uri=" + encodeURI(this.redirect_uri);
  //   url += "&show_dialog=true";
  //   url += "&scope=playlist-modify-public playlist-read-private playlist-modify-private"
  //   window.location.href = url;
  // }

  

