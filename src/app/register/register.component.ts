// register.component.ts

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private http: HttpClient,private router: Router) {}
  username: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  async onSubmit(form: any) {
    try {
      const formData = {
        username: form.username,
        email: form.email,
        password: form.password
      };
      console.log('formData', JSON.stringify(formData));
      const response = await this.http.post<any>(environment.apiUrl+'/api/register/', formData).toPromise();
      this.router.navigate(['/login']); // Redirect to the login page
      console.log('Registration successful', response);
      // Handle successful registration here, like displaying a success message
    } catch (error) {
      console.error('Registration failed', error);
      this.errorMessage = 'Registration failed. Please try again.'; // Show error message
    }
  }
}
