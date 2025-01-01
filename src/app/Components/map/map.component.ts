import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map!: L.Map;

  private initMap(): void {
    this.map = L.map('map').setView([17.503359098587634, 78.38868876899016], 12); // Replace with your latitude and longitude

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(this.map);

    // Add a marker with a clickable link in the popup
    const popupContent = `
      <div>
        <p>My Location</p>
        <a href="https://www.google.com/maps/dir//second+floor,+1%2F2%2F49%2F1,+Nizampet+Rd,+Jai+Bharat+Nagar,+Nagarjuna+Homes,+Kukatpally,+Hyderabad,+Telangana+500090,+India/@17.5033327,78.3063221,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bcb91007c640a13:0x41380cc5478a693b!2m2!1d78.3887239!2d17.5033497!5m1!1e1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" style="color: blue; text-decoration: underline;">
          Open Link
        </a>
      </div>
    `;

    const customIcon = L.icon({
      iconUrl: './assets/images/pin.png', // Path to your custom marker icon
      iconSize: [85, 95], // Size of the icon [width, height]
      iconAnchor: [15, 40], // Anchor point of the icon [x, y]
      popupAnchor: [0, -40] // Point from which the popup should open relative to the icon anchor
    });

    L.marker([17.503359098587634, 78.38868876899016], { icon: customIcon }) // Replace with your latitude and longitude
      .addTo(this.map)
      .bindPopup(popupContent) // Add HTML content to the popup
      .openPopup();
  }

  ngOnInit(): void {
    this.initMap();
  }
}
