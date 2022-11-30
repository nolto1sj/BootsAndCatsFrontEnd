import { Component, OnInit } from '@angular/core';
import { BootsAndCatsService } from '../boots-and-cats.service';
import { Albums } from '../interfaces/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
//new property
  albums: Albums = {} as Albums;

  constructor(private bootsAndCatsService: BootsAndCatsService) { }

  ngOnInit(): void {
    this.bootsAndCatsService.getAlbums().subscribe((response: Albums) => {this.albums = response;})
    //this.bootsAndCatsService.getAlbums().subscribe((response: Albums) => {this.albums = (response as any).albums.Item;})
  }

}
