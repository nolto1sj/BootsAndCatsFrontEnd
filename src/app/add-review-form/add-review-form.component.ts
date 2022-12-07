import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, convertToParamMap, ParamMap, Router } from '@angular/router';
import { Review } from '../interfaces/review';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-add-review-form',
  templateUrl: './add-review-form.component.html',
  styleUrls: ['./add-review-form.component.css']
})
export class AddReviewFormComponent implements OnInit {
  albumId: string | null;

  @Output() reviewSave = new EventEmitter<Review>();
  rating: number = 1;
  reviewContent: string = '';
  recommendation: boolean = false;
  tag: string = '';
  // dateSubmitted: Date = this.dateSubmitted.getDate();


  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {this.albumId = paramMap.get('id')})
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

  viewReviewsRedirect(): void {
    this.router.navigate(['review/all']);
  }
}
