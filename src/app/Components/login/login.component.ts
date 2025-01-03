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
        }
      },
      error => {
        this.errorMessage = error.error.message;
      }
    );
  }
}
