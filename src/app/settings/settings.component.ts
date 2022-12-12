import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { User } from '../interfaces/user';
import { BootsAndCatsBackendService } from '../services/boots-and-cats-backend.service';
import { BootsAndCatsService } from '../services/boots-and-cats.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  userHidden: boolean = true;
  passHidden: boolean = true;
  theme: boolean = true;
  loginUser: User = this.frontEndService.loginUser;
  confirmUser: string = '';
  confirmPass: string = '';

  constructor(
    private backEndService: BootsAndCatsBackendService,
    private frontEndService: BootsAndCatsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  showUser(): void {
    this.userHidden = false;
    this.passHidden = true;
  }

  showPass(): void {
    this.userHidden = true;
    this.passHidden = false;
  }

  themeChange(): void {
    this.userHidden = true;
    this.passHidden = true;

    if (this.theme == true) {
      if (
        confirm(
          'Are you sure you want to hurt your eyes? (Switch to light mode)'
        ) == true
      ) {
        this.theme = false;
        (<HTMLLinkElement>document.getElementById('theme')).href =
          'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.2.2/cerulean/bootstrap.min.css';
      }
    } else if (this.theme == false) {
      if (
        confirm(
          'Are you sure you want to switch to dark mode? (Your eyes will thank you)'
        ) == true
      ) {
        this.theme = true;
        (<HTMLLinkElement>document.getElementById('theme')).href =
          'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.2.2/darkly/bootstrap.min.css';
      }
    }
  }

  UpdateUser(userForm: User): void {
    if (userForm.userName != this.confirmUser) {
      alert("New username and confirm username aren't the same!");
      console.log(this.confirmUser)
      console.log(userForm)
    } else {
      if (confirm('Are you sure you want to change your username?') == true) {
        this.backEndService.UpdateUser(userForm).subscribe();
        this.router.navigate(['/albums']);
      }
    }
  }

  UpdatePass(userForm: User): void {
    if (userForm.password != this.confirmPass) {
      alert("New password and confirm password aren't the same!");
    } else {
      if (confirm('Are you sure you want to change your password?') == true) {
        this.backEndService.UpdateUser(userForm).subscribe();
        this.router.navigate(['/albums']);
      }
    }
  }
}
