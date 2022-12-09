import { Component, OnInit } from '@angular/core';
import { RelatedArtists, Artist } from '../interfaces/related-artists';
import { SearchArtist, Item } from '../interfaces/search-artist';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-aggregator',
  templateUrl: './aggregator.component.html',
  styleUrls: ['./aggregator.component.css']
})
export class AggregatorComponent implements OnInit {
  artistSearch: string = '';
  artistAPIResponse: SearchArtist= {} as SearchArtist
  artistArray: Item[] = []

  relatedArists: RelatedArtists = {} as RelatedArtists
  relatedArtistArray: Artist[] = []
  

  // itemArray: Item[] = []
  // aristId: string = ''

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
  }

  // generateWeb = (): Artists => {
   
  //   return this.spotifyService.searchArtists(this.artistSearch).subscribe((data: SearchArtist) => (this.searchAPIResponse = data));
  // }
  searchForArtist(){
    this.spotifyService.searchArtists(this.artistSearch).subscribe(data => this.artistAPIResponse = data);
    this.artistArray = this.artistAPIResponse.artists.items;
    console.log();
    }

    captureId(itemId: string){
      this.spotifyService.currentArtistId = itemId;
      this.spotifyService.getRelatedArtists().subscribe((data: RelatedArtists) => (this.relatedArists = data));
      this.relatedArtistArray = this.relatedArists.artists;
      console.log("populated");
    }

    

}
