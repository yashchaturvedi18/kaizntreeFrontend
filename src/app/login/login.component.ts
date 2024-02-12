// login.component.ts

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http: HttpClient, private router: Router) {}

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  async onSubmit(form: any) {
    try {
      const formData = {
        username: form.username,
        password: form.password
      };
      const response = await this.http.post<any>(environment.apiUrl + '/api/login/', formData).toPromise();
      console.log('Login successful', response);
      // Handle successful login here, like storing user data in local storage
      this.router.navigate(['/dashboard']); // Redirect to the dashboard page
    } catch (error) {
      console.error('Login failed', error);
      this.errorMessage = 'Login failed. Please try again.';
    }
  }
}
