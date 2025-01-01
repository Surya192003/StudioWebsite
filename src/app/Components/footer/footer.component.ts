import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  phoneNumber: string = '+919110745710';
message: string = '';
  Take_to_contact_Us(){
    const formattedMessage = encodeURIComponent(this.message);
    const whatsappURL = `https://wa.me/${this.phoneNumber}?text=${formattedMessage}`;
    window.open(whatsappURL, '_blank');
  }
}
