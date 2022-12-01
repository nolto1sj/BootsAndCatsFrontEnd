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
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AlbumsComponent,
    AlbumReviewComponent,
    HeaderComponent,
    AlbumFilterFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
