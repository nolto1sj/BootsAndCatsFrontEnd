import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Review } from '../interfaces/review';
import { LoginComponent } from '../login/login.component';
import { BootsAndCatsService } from '../services/boots-and-cats.service';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-add-review-form',
  templateUrl: './add-review-form.component.html',
  styleUrls: ['./add-review-form.component.css']
})
export class AddReviewFormComponent implements OnInit {
  @Output() reviewSave = new EventEmitter<Review>();
  formReview: Review = {} as Review
  formRating: number = 1;
  formReviewContent: string = '';
  formRecommendation: boolean = false;
  formTag: string = '';

  loginUser = this.frontEndService.loginUser;

  constructor(private frontEndService: BootsAndCatsService, private spotifyService: SpotifyService) { }

  ngOnInit(): void {
  }

  submit = (): void => {
    this.formReview.rating = this.formRating;
    this.formReview.reviewContent = this.formReviewContent;
    this.formReview.recommendation = this.formRecommendation;
    this.formReview.tag = this.formTag;
    this.formReview.userId = this.frontEndService.loginUser.id;
    this.formReview.albumId = this.spotifyService.currentAlbumId;

    console.log(this.formReview);
    
    this.reviewSave.emit(this.formReview);

    this.formRating = 1;
    this.formReviewContent = '';
    this.formRecommendation = false;
  };


}
