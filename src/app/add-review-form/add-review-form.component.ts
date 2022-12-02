import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Review } from '../interfaces/review';

@Component({
  selector: 'app-add-review-form',
  templateUrl: './add-review-form.component.html',
  styleUrls: ['./add-review-form.component.css']
})
export class AddReviewFormComponent implements OnInit {
  @Output() reviewSave = new EventEmitter<Review>();
  rating: number = 1;
  reviewContent: string = '';
  recommendation: boolean = false;
  tag: string = '';
  // dateSubmitted: Date = this.dateSubmitted.getDate();
  
  constructor() { }

  ngOnInit(): void {
  }

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


}
