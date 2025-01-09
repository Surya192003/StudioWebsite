import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {
  username: any ;  // This can be dynamically loaded (e.g., from a user service)

  constructor(public Router : Router) {}

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
  }

  logout(): void {
    localStorage.clear();
    this.Router.navigate(['/'])
    alert('You have logged out!');
  }
}
