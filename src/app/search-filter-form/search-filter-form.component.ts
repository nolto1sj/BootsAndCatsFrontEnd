import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SpotifyService } from '../services/spotify.service'

// import { Albums, Album, Item } from '../interfaces/album';
import { SearchFeature, Albums, Item } from '../interfaces/search-feature';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-filter-form',
  templateUrl: './search-filter-form.component.html',
  styleUrls: ['./search-filter-form.component.css']
})
export class SearchFilterFormComponent implements OnInit {
  searchQuery: string = '';
  searchAPIResponse: SearchFeature = {}  as SearchFeature;

  itemResponse: Albums = {} as Albums
  itemArray: Item[] = []

constructor(private spotifyService: SpotifyService, private router: Router) { }

  ngOnInit(): void {
  }

  searchAlbums(){
  this.spotifyService.getAllAlbums(this.searchQuery).subscribe((data: SearchFeature) => {this.searchAPIResponse = data;})
  this.itemResponse = this.searchAPIResponse.albums
  this.itemArray = this.itemResponse.items
  }

  reviewRedirect(): void {
    this.router.navigate(['albums/:id']);
  }
}
 