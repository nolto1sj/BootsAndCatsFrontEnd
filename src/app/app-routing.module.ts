import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumReviewComponent } from './album-review/album-review.component';
import { AddReviewFormComponent } from './add-review-form/add-review-form.component';
import { SearchFilterFormComponent } from './search-filter-form/search-filter-form.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'review', component: AddReviewFormComponent },
  { path: 'search', component: SearchFilterFormComponent },
  { path: '', component: LoginComponent, pathMatch: 'full' },
];


@NgModule({
  imports: 
  [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  // declarations: [],
  // imports: [
  //   CommonModule
  // ]
})
export class AppRoutingModule { }
