// dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: any[] = []; // Define an array to store items data

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Call a method to fetch items data when the component initializes
    this.fetchItems();
  }

  fetchItems() {
    // Make an HTTP GET request to fetch items data from the API
    this.http.get<any[]>(`${environment.apiUrl}/api/items/`).subscribe(
      (response) => {
        // Assign the fetched items data to the component's items array
        this.items = response;
      },
      (error) => {
        console.error('Error fetching items:', error);
        // Handle error scenarios here, such as displaying an error message
      }
    );
  }
}
