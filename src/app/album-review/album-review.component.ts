import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Review } from '../interfaces/review';
import { BootsAndCatsBackendService } from '../services/boots-and-cats-backend.service';
import { BootsAndCatsService } from '../services/boots-and-cats.service';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { SpotifyService } from '../services/spotify.service';
import { AlbumByIdResponse } from '../interfaces/album-by-id-response';

@Component({
  selector: 'app-album-review',
  templateUrl: './album-review.component.html',
  styleUrls: ['./album-review.component.css']
})
export class AlbumReviewComponent implements OnInit {
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

  async ngOnInit(): Promise<void> {
    await this.loadReviews();
    this.loadUsers();
    console.log(this.reviews.length);
  }
  
  loadUsers = (): void => {
    this.service.getAllUser().subscribe((data: User[]) => this.userArray = data);
  }

  //Method to load reviews
  loadReviews = async (): Promise<void> => {
    this.service.getReviews().subscribe((data: Review[]) => this.reviews = data);
    
    for (let review of this.reviews){
      (await this.getAlbumById(review.albumId));
    }
    console.log(this.albumAPIResponse);
    
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
   (await this.spotifyservice.getAlbumById(albumId)).subscribe((data => this.albumAPIResponse = data));
  }
}






