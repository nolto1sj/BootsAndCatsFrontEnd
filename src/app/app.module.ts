import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumReviewComponent } from './album-review/album-review.component';
import { HeaderComponent } from './header/header.component';
import { AlbumFilterFormComponent } from './album-filter-form/album-filter-form.component';
import { HttpClientModule } from '@angular/common/http';
import { AddReviewFormComponent } from './add-review-form/add-review-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AlbumsComponent,
    AlbumReviewComponent,
    HeaderComponent,
    AlbumFilterFormComponent,
    AddReviewFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
