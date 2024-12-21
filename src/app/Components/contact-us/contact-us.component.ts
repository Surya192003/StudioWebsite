import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  phoneNumber: string = '+918179091230';
  message: string = '';

  sendWhatsAppMessage(): void {
      const formattedMessage = encodeURIComponent(this.message);
      const whatsappURL = `https://wa.me/${this.phoneNumber}?text=${formattedMessage}`;
      window.open(whatsappURL, '_blank');
  }

}
