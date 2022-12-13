import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Albums } from '../interfaces/album';
import { Review } from '../interfaces/review';
import { BootsAndCatsBackendService } from '../services/boots-and-cats-backend.service';
import { BootsAndCatsService } from '../services/boots-and-cats.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-album-review',
  templateUrl: './album-review.component.html',
  styleUrls: ['./album-review.component.css']
})
export class AlbumReviewComponent implements OnInit {
  reviews: Review[] = [];

  constructor(private service: BootsAndCatsBackendService,
    public frontEndService: BootsAndCatsService
    // private router: Router
  ) { }

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
    console.log("fired review");
    
    this.service.addReview(review).subscribe(() => this.loadReviews());
  }

  // addReviewRedirect(): void {
  //   this.router.navigate(['/albums']);
  // }
}






