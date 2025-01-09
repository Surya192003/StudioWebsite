import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private authService: AuthService, private router: Router) { }
  fullName = '';
  email = '';
  phoneNumber = '';
  password = '';
  confirmPassword = '';
  errorMessage = '';
  taketologin(){
    this.router.navigate(['/login']);
  }
  signup() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match!';
    } else {
      this.errorMessage = '';
      const userData = {
        fullName: this.fullName,
        email: this.email,
        phonenumber: this.phoneNumber,
        password: this.password
      } 
      this.authService.Signup(userData).subscribe(
        Response => {
          if(Response.message == 'User created successfully'){
            console.log('Sign Up Successful:', {
              fullName: this.fullName,
              email: this.email,
              phoneNumber: this.phoneNumber,
              password: this.password
            });
          }else{
            console.log("something went wrong");
          }
        }
      )
      
    }
  }
}
