import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchText="";
  @Output() 
  searchTextChanged = new EventEmitter();

  search(){
    this.searchTextChanged.emit(this.searchText);
   }
}
