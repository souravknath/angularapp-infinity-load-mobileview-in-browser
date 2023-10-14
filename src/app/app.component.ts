import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'infinity-load';
  items: any[] = [];
  page = 1;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadMoreItems();
  }

  loadMoreItems(): void {
    this.apiService.getItems(this.page).subscribe(data => {
      // Append new items to the existing list
      this.items = [...this.items, ...data];
      this.page++;
    });
  }
}
