import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-studio-members',
  templateUrl: './studio-members.component.html',
  styleUrls: ['./studio-members.component.css'],
  animations: [
    trigger('scrolling', [
      transition('* => *', [
        style({ transform: 'translateX(0)' }),
        animate('10s linear', style({ transform: 'translateX(-100%)' })) // Adjust to change speed
      ])
    ])
  ]
})
export class StudioMembersComponent implements OnInit {

  members = [
    { name: 'John Doe', photo: 'assets/images/member-1.jpg' },
    { name: 'Jane Smith', photo: 'assets/images/member-2.jpg' },
    { name: 'Alice Johnson', photo: 'assets/images/member-3.jpg' },
    { name: 'John Doe', photo: 'assets/images/member-1.jpg' },
    { name: 'Jane Smith', photo: 'assets/images/member-2.jpg' },
    { name: 'Alice Johnson', photo: 'assets/images/member-3.jpg' },
    { name: 'John Doe', photo: 'assets/images/member-1.jpg' },
    { name: 'Jane Smith', photo: 'assets/images/member-2.jpg' },
    { name: 'Alice Johnson', photo: 'assets/images/member-3.jpg' }
  ];

  // Duplicating the array to simulate infinite scroll
  membersToDisplay = [...this.members, ...this.members];

  constructor() { }

  ngOnInit(): void { }
}
