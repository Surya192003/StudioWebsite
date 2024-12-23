import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
isHidden: any;
  constructor(public router : Router) {}
  Take_to_contact_Us(){
    this.router.navigate(["/Contact_Us"])
  }
  isPinned: boolean = false;
  private lastScrollTop: number = 0;
  private intervalId: any;

  ngOnInit() {
    // Optional: Interval to toggle pinned state every 2 seconds
    this.intervalId = setInterval(() => {
      this.isPinned = !this.isPinned;
    }, 2000); // Toggle every 2 seconds
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  // Event listener for scrolling
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Check if the user is scrolling up or down
    if (currentScroll > this.lastScrollTop) {
      // Scrolling down
      this.hideNavbar();
    } else {
      // Scrolling up
      this.showNavbar();
    }

    // Update last scroll position
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  hideNavbar() {
    const header = document.querySelector('header');
    if (header) {
      header.classList.add('hidden');
    }
  }

  showNavbar() {
    const header = document.querySelector('header');
    if (header) {
      header.classList.remove('hidden');
    }
  }
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      // Smooth scroll using `scrollIntoView`
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
