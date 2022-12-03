import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SpotifyService } from '../services/spotify.service'
import { Albums, Album } from '../interfaces/album';
import { SearchFeature } from '../interfaces/search-feature';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-filter-form',
  templateUrl: './search-filter-form.component.html',
  styleUrls: ['./search-filter-form.component.css']
})
export class SearchFilterFormComponent implements OnInit {
  searchQuery: string = '';
  searchAPIResponse: SearchFeature = {}  as SearchFeature;
  albumResponse: Albums = {} as Albums
  albumArray: Album[] = []

constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
  }

  searchAlbums(){
  this.spotifyService.getAllAlbums(this.searchQuery).subscribe((data: SearchFeature) => {this.searchAPIResponse = data;})
  this.albumResponse = this.searchAPIResponse.albums
  this.albumArray = this.albumResponse.albums
  }
}
 