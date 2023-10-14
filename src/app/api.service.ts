import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.example.com/items'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getItems(page: number): Observable<any[]> {
    return of([
        { "id": 1, "name": "Item 1" },
        { "id": 2, "name": "Item 2" },
        { "id": 3, "name": "Item 3" },
        { "id": 4, "name": "Item 4" },
        { "id": 5, "name": "Item 5" },
        { "id": 6, "name": "Item 6" },
        { "id": 7, "name": "Item 7" },
        { "id": 8, "name": "Item 8" },
        { "id": 9, "name": "Item 9" },
        { "id": 10, "name": "Item 10" },
        { "id": 11, "name": "Item 11" },
        { "id": 12, "name": "Item 12" },
        { "id": 13, "name": "Item 13" },
        { "id": 14, "name": "Item 14" },
        { "id": 15, "name": "Item 15" }
      ]
      )//this.http.get<any[]>(`${this.apiUrl}?page=${page}`);
  }
}
