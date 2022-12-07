import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumReviewComponent } from './album-review/album-review.component';
import { AggregatorComponent } from './aggregator/aggregator.component';
import { SettingsComponent } from './settings/settings.component';
import { SearchFilterFormComponent } from './search-filter-form/search-filter-form.component';
import { AddReviewFormComponent } from './add-review-form/add-review-form.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'review', component: SearchFilterFormComponent },
  { path: 'review/add', component: AddReviewFormComponent },
  { path: 'review/all', component: AlbumReviewComponent },
  { path: 'aggregator', component: AggregatorComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', component: LoginComponent, pathMatch:"full"}
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
