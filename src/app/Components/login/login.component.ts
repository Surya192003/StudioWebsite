// login.component.ts

import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';


  constructor(private authService: AuthService, private router: Router) { }
  taketosignin(){
    this.router.navigate(['/signup'])
  }
  login() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        console.log(response.data);
        if (response.message === 'Login Successful') {
          localStorage.setItem('userid',response.data.id);
          localStorage.setItem('username',response.data.fullName);
          localStorage.setItem('email',response.data.email);
          localStorage.setItem('phonenumber',response.data.phonenumber);
          localStorage.setItem('subscription_type',response.data.subscription_type);
          if(response.data.id){      
          this.router.navigate(['/UserDAshboard'])
          }
        }
      },
      error => {
        this.errorMessage = error.error.message;
      }
    );
  }
}
