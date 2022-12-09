import { Component, OnInit } from '@angular/core';
import { BootsAndCatsService } from '../services/boots-and-cats.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public frontEndService: BootsAndCatsService) { }

  hideNavBar: any;

  ngOnInit(): void {
    this.hideNavBar = this.frontEndService.hideNavBar()
    console.log(this.hideNavBar);
  }

}
