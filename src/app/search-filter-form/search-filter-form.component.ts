import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SpotifyService } from '../services/spotify.service'
import { Album, SearchFeature } from '../interfaces/search-feature';

@Component({
  selector: 'app-search-filter-form',
  templateUrl: './search-filter-form.component.html',
  styleUrls: ['./search-filter-form.component.css']
})
export class SearchFilterFormComponent implements OnInit {
  searchQuery: string = '';
  searchAPIResponse: SearchFeature = {} as SearchFeature;


constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
  }

  searchAlbums(){
  this.spotifyService.getAllAlbums(this.searchQuery).subscribe((data: SearchFeature) => {this.searchAPIResponse = data;})
  }
 
}
 