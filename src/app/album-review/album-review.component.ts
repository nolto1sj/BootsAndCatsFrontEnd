import { Component, OnInit } from '@angular/core';
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
    this.service.getReviews().subscribe((data: Review[]) => this.reviews = data);
  }

}
