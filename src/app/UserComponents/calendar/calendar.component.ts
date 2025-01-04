import { Component, OnInit , Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  currentMonth: Date = new Date();
  daysOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  daysInMonth: number[] = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar(): void {
    const firstDayOfMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1);
    const lastDayOfMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 0);
    const daysInCurrentMonth = lastDayOfMonth.getDate();
    
    // Calculate which day of the week the first day of the month falls on
    const startDay = firstDayOfMonth.getDay();
    
    // Create an array representing the days of the current month
    this.daysInMonth = Array.from({ length: daysInCurrentMonth }, (_, i) => i + 1);
  }

  changeMonth(direction: number): void {
    const newMonth = new Date(this.currentMonth);
    newMonth.setMonth(this.currentMonth.getMonth() + direction);
    this.currentMonth = newMonth;
    this.generateCalendar();
  }

  openAddEventDialog(date: number): void {
    const dialogRef = this.dialog.open(ReelDialogComponent, {
      width: '400px',
      data: { date: date }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(`Event for ${date}: ${result}`);
        // Here you can handle storing the event in a service or local storage
      }
    });
  }
}

@Component({
  selector: 'app-reel-dialog',
  templateUrl: 'reel-dialog.component.html',
  styleUrls: ['reel-dialog.component.css']
})
export class ReelDialogComponent {
  newMessage: string = '';

  constructor(
    public dialogRef: MatDialogRef<ReelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { date: number, messages: string[] }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      this.dialogRef.close(this.newMessage);
      this.newMessage = ''; // Clear the message input after sending
    }
  }
}
