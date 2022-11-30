import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BootsAndCatsService } from '../boots-and-cats.service';
import { Review } from '../interfaces/review';

@Component({
  selector: 'app-album-review',
  templateUrl: './album-review.component.html',
  styleUrls: ['./album-review.component.css']
})
export class AlbumReviewComponent implements OnInit {
  reviews: Review[] = [];

  constructor(private service: BootsAndCatsService) { }

  ngOnInit(): void {
    this.loadReviews();
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




