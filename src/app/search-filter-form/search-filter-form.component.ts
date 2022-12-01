import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Album, SearchFeature } from '../interfaces/search-feature';
import { BootsAndCatsService } from '../services/boots-and-cats.service';
@Component({
  selector: 'app-search-filter-form',
  templateUrl: './search-filter-form.component.html',
  styleUrls: ['./search-filter-form.component.css']
})
export class SearchFilterFormComponent implements OnInit {
searchQuery: string = '';
//new property
items: SearchFeature = {} as SearchFeature;


constructor(private bootsAndCatsService: BootsAndCatsService) { }

  ngOnInit(): void {
  }

  searchAlbums(){
  this.bootsAndCatsService.getAllAlbums(this.searchQuery).subscribe((data: SearchFeature) => {this.items = data;})
    
  }
 
}
 