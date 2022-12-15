import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Review } from '../interfaces/review';
import { BootsAndCatsBackendService } from '../services/boots-and-cats-backend.service';
import { BootsAndCatsService } from '../services/boots-and-cats.service';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { SpotifyService } from '../services/spotify.service';
import { AlbumByIdResponse, Image } from '../interfaces/album-by-id-response';

@Component({
  selector: 'app-album-review',
  templateUrl: './album-review.component.html',
  styleUrls: ['./album-review.component.css']
})
export class AlbumReviewComponent implements OnInit {
  albumAPIResponseArray: AlbumByIdResponse[] =[];
  albumNames: string[] = [];
  albumAPIResponse: AlbumByIdResponse = {} as AlbumByIdResponse;
  albumArray: AlbumByIdResponse[] = [];
  x: number = 0;
  reviews: Review[] = [];
  userArray: User[] = [];

  constructor(private service: BootsAndCatsBackendService,
    public frontEndService: BootsAndCatsService,
    private router: Router,
    private spotifyservice: SpotifyService
  ) { }

    ngOnInit(): void {
    this.loadReviews();
    this.loadUsers();
  }
  
  loadUsers = (): void => {
    this.service.getAllUser().subscribe((data: User[]) => this.userArray = data);
  }

  //Method to load reviews
  loadReviews = async (): Promise<void> => {
    this.service.getReviews().subscribe((data: Review[]) => {
      this.reviews = data;
      for (let review of this.reviews){
        (this.getAlbumById(review.albumId));
      }
    });
    console.log("Review length:", this.reviews.length);
    
    
    // let ReviewAlbumMap = new Map<Image, Review>();
    // for (let pair of ReviewAlbumMap){
    //   ReviewAlbumMap.set()
    // }
    console.log(this.albumAPIResponseArray);
    
  }

  //Method to delete review and load reviews afterwards
  removeReview = (id: number): void => {
    this.service.deleteReview(id).subscribe(() => this.loadReviews());
  }

  //Method to add review and load reviews afterwards
  addReview = (review: Review): void => {
    console.log("fired review");
    
    this.service.addReview(review).subscribe(() => this.loadReviews());
  }

  addReviewRedirect(): void {
    this.router.navigate(['/albums']);
  }

  findIndex = (review: Review): number => {
    return this.userArray.findIndex(x => x.id == review.userId)
  }

  async getAlbumById(albumId: string) {
   (await this.spotifyservice.getAlbumById(albumId)).subscribe((data => {
    for (let review of this.reviews){
      if (review.albumId == albumId){
        review.albumName = data.name
        review.imageURL = data.images[0].url;
      }
    }
  }));
  }
}






