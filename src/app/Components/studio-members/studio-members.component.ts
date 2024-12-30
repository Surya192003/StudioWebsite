import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studio-members',
  templateUrl: './studio-members.component.html',
  styleUrls: ['./studio-members.component.css'],
})
export class StudioMembersComponent implements OnInit {

  // Define each member with their name, photo, and Instagram link
  members = [
    { 
      name: 'Sreekanth Chirkya', 
      photo: './assets/images/Sreekanth_sir.jpg',
      instagram: 'https://www.instagram.com/sreekanth_chirkya?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    },
    { 
      name: 'Arjun Manikanta', 
      photo: './assets/images/AM_sir.jpg',
      instagram: 'https://www.instagram.com/i_arjunmani?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    },
    { 
      name: 'Sravani', 
      photo: './assets/images/Sravani_mam.jpg',
      instagram: 'https://www.instagram.com/alahari_sravani?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    },
    { 
      name: 'Geethika', 
      photo: './assets/images/Geethika_mam.jpg',
      instagram: 'https://www.instagram.com/geethika_3?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    },
    { 
      name: 'Gowtham', 
      photo: './assets/images/gowtham_anna.jpg',
      instagram: 'https://www.instagram.com/gowthamuuuu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    },
    { 
      name: 'Prudhvi', 
      photo: './assets/images/prudhvi.jpg',
      instagram: 'https://www.instagram.com/prudhvirajupenumatsa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    },
  ];

  constructor() { }

  ngOnInit(): void { }

  // Method to redirect to Instagram profile
  goToInstagram(instagramUrl: string) {
    window.open(instagramUrl, '_blank');
  }
}
