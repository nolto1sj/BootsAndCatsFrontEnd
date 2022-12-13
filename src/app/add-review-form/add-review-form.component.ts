import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Review } from '../interfaces/review';
import { LoginComponent } from '../login/login.component';
import { BootsAndCatsBackendService } from '../services/boots-and-cats-backend.service';
import { BootsAndCatsService } from '../services/boots-and-cats.service';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-add-review-form',
  templateUrl: './add-review-form.component.html',
  styleUrls: ['./add-review-form.component.css']
})
export class AddReviewFormComponent implements OnInit {
  
  formReview: Review = {} as Review
  formRating: number = 1;
  formReviewContent: string = '';
  formRecommendation: boolean = false;
  formTag: string = '';

  loginUser = this.frontEndService.loginUser;

  constructor(private frontEndService: BootsAndCatsService, private spotifyService: SpotifyService, private backendService: BootsAndCatsBackendService, private router: Router) { }

  ngOnInit(): void {
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
