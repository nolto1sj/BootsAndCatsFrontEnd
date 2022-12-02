import { Component, OnInit } from '@angular/core';

import { Albums } from '../interfaces/album';
import { SearchFeature } from '../interfaces/search-feature';
import { AuthorizeService } from '../services/authorize.service';
import { BootsAndCatsService } from '../services/boots-and-cats.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
//new property
  searchFeature: SearchFeature = {} as SearchFeature;
  albums: Albums = {} as Albums;
  albumTest: string = "DAMN"

  constructor(private spotifyService: AuthorizeService) { }

  ngOnInit(): void {
    this.spotifyService.getAllAlbums(this.albumTest).subscribe((response: SearchFeature) => {this.searchFeature = response;});
    console.log(this.searchFeature);
    
    
  }


}