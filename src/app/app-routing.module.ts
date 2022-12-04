import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumReviewComponent } from './album-review/album-review.component';
import { AggregatorComponent } from './aggregator/aggregator.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'review', component: AlbumReviewComponent },
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
