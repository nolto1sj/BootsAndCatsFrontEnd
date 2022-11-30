import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumReviewComponent } from './album-review.component';

describe('AlbumReviewComponent', () => {
  let component: AlbumReviewComponent;
  let fixture: ComponentFixture<AlbumReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
