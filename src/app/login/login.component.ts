import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    (<HTMLLinkElement>document.getElementById("theme")).href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.2.2/darkly/bootstrap.min.css"
  }


  signUpRedirect(): void {
    this.router.navigate(['/signup']);

  }
}
