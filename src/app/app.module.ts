import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumReviewComponent } from './album-review/album-review.component';
import { HeaderComponent } from './header/header.component';
import { SpotifyService } from './services/spotify.service';

import { HttpClientModule } from '@angular/common/http';
import { AddReviewFormComponent } from './add-review-form/add-review-form.component';
import { FormsModule } from '@angular/forms';
import { SearchFilterFormComponent } from './search-filter-form/search-filter-form.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AlbumsComponent,
    AlbumReviewComponent,
    HeaderComponent,
    AddReviewFormComponent,
    SearchFilterFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
