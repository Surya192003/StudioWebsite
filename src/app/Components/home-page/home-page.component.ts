import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  // An array of objects to track the mute status of each video
  videos = [
    { isMuted: true }, // First video
    { isMuted: true }  // Second video
  ];

  // Toggle mute for the given video
  toggleMute(index: number) {
    // Mute all videos first
    this.videos.forEach((video, i) => {
      if (i !== index) {
        video.isMuted = true;  // Mute other videos
      }
    });

    // Toggle the mute status for the selected video
    this.videos[index].isMuted = !this.videos[index].isMuted;
  }

  onVideoEnd() {
    console.log('Video has ended');
  }
}
