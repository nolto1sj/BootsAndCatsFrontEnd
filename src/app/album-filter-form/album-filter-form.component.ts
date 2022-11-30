import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AlbumFilter } from '../interfaces/album-filter';


@Component({
  selector: 'app-album-filter-form',
  templateUrl: './album-filter-form.component.html',
  styleUrls: ['./album-filter-form.component.css']
})
export class AlbumFilterFormComponent implements OnInit {
  @Output() filterUpdate = new EventEmitter<AlbumFilter>();

  albumFilter: string = '';
  artistFilter: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  update = (): void => {
    this.filterUpdate.emit({
      albumName: this.albumFilter,
      artistName: this.artistFilter
    });
  }

  clearF = (): void => {
    this.albumFilter = '';
    this.artistFilter = '';
    this.update();
  };

}
