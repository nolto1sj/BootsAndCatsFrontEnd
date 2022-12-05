import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  userHidden: boolean = true;
  passHidden: boolean = true;
  theme: boolean = true;
  constructor() { }

  ngOnInit(): void {
    
  }

showUser(): void {
  this.userHidden = false;
  this.passHidden= true;
}

showPass(): void {
  this.userHidden = true;
  this.passHidden= false;
}

themeChange(): void {

  this.userHidden = true;
  this.passHidden= true;


  if (this.theme == true){
    if (confirm("Are you sure you want to hurt your eyes? \(Switch to light mode\)") == true){
        this.theme = false;
        (<HTMLLinkElement>document.getElementById("theme")).href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.2.2/cerulean/bootstrap.min.css"
        
    }
  } else if (this.theme == false) {
    if(confirm("Are you sure you want to switch to dark mode? \(Your eyes will thank you\)") == true){
      this.theme = true;
      (<HTMLLinkElement>document.getElementById("theme")).href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.2.2/darkly/bootstrap.min.css"
    }
  }
}

}
