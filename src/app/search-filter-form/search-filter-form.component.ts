import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service'
import { SearchFeature, Albums, Item } from '../interfaces/search-feature';
import { Review } from '../interfaces/review';
import { BootsAndCatsService } from '../services/boots-and-cats.service';
import { BootsAndCatsBackendService } from '../services/boots-and-cats-backend.service';
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

  reviewItemId: string = ""

  formReview: Review = {} as Review
  formRating: number = 1;
  formReviewContent: string = '';
  formRecommendation: boolean = false;
  formTag: string = '';

  loginUser = this.frontEndService.loginUser;

constructor(private spotifyService: SpotifyService, private frontEndService: BootsAndCatsService, private backendService: BootsAndCatsBackendService, private router: Router) { }

  ngOnInit(): void {
    
  }

  async searchAlbums(){
  (await this.spotifyService.getAllAlbums(this.searchQuery)).subscribe((data: SearchFeature) => {this.searchAPIResponse = data;})
  this.itemResponse = this.searchAPIResponse.albums
  this.itemArray = this.itemResponse.items
  }

  captureId(itemId: string){
    this.spotifyService.currentAlbumId = itemId;
  }

  addReview = (review: Review): void => {
    console.log("fired review");
    
    this.backendService.addReview(review).subscribe();
  }

  submit = (): void => {
    this.formReview.rating = this.formRating;
    this.formReview.reviewContent = this.formReviewContent;
    this.formReview.recommendation = this.formRecommendation;
    this.formReview.tag = this.formTag;
    this.formReview.userId = this.frontEndService.loginUser.id;
    this.formReview.albumId = this.spotifyService.currentAlbumId;

    console.log(this.formReview);
    
    this.addReview(this.formReview)
    this.router.navigate(['/review']);

  };

}