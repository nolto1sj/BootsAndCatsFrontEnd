import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumFilterFormComponent } from './album-filter-form.component';

describe('AlbumFilterFormComponent', () => {
  let component: AlbumFilterFormComponent;
  let fixture: ComponentFixture<AlbumFilterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumFilterFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumFilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
