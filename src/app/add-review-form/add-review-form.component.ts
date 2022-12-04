import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Album } from '../interfaces/album';
import { Review } from '../interfaces/review';
import { BootsAndCatsBackendService } from '../services/boots-and-cats-backend.service';
import { BootsAndCatsService } from '../services/boots-and-cats.service';

@Component({
  selector: 'app-add-review-form',
  templateUrl: './add-review-form.component.html',
  styleUrls: ['./add-review-form.component.css']
})
export class AddReviewFormComponent implements OnInit {

 reviews: Review[] = [];


//added to tie selected album to review form view
  @Input () albumR: Album = {} as Album;

  @Output() reviewSave = new EventEmitter<Review>();
  rating: number = 1;
  reviewContent: string = '';
  recommendation: boolean = false;
  tag: string = '';
  // dateSubmitted: Date = this.dateSubmitted.getDate(); 

  display: boolean = false;

  constructor(private service: BootsAndCatsBackendService) { }

  ngOnInit(): void {
    this.loadReviews();
  }
  
  //Method to submit order
  submit = (): void => {
    this.reviewSave.emit({
      Rating: this.rating,
      ReviewContent: this.reviewContent,
      Recommendation: this.recommendation,
      Tag: this.tag,
    });
    this.rating = 1;
    this.reviewContent = '';
    this.recommendation = false;
  };

  // added to show review all reviews upon click
  toggleDisplay() {
    this.display = !this.display;
  }

    //Method to load reviews
    loadReviews = (): void => {
      this.service.getReviews().subscribe((data: Review[]) => this.reviews = data);
    }
  
    //Method to delete review and load reviews afterwards
    removeReview = (id: number): void => {
      this.service.deleteReview(id).subscribe(() => this.loadReviews());
    }
  
    //Method to add review and load reviews afterwards
    addReview = (review: Review): void => {
      this.service.addReview(review).subscribe(() => this.loadReviews());
    }
}
