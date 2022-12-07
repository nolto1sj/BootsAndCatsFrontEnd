import { Component, OnInit } from '@angular/core';
import { Albums } from '../interfaces/album';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
//new property
  albums: Albums = {} as Albums;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    // this.bootsAndCatsService.displayAlbums().subscribe((response: Albums) => {this.albums = response;})
    // this.bootsAndCatsService.getAlbums().subscribe((response: Albums) => {this.albums = (response as any).albums.Item;})
  }

}