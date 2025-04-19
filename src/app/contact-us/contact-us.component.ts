import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  name = '';
  email = '';
  subject = '';
  message = '';
  sendMessage(): void {
    if (!this.name || !this.email || !this.subject || !this.message) {
      alert('Please fill out all the fields!');
    } else {
      alert('Message sent successfully!');
      this.name = this.email = this.subject = this.message = '';
    }
  }
}
