import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username: string = '';
  email: string = '';

  onSubmit() {
    console.log('Username:', this.username);
    console.log('Email:', this.email);
    alert('Login successful!');
  }
}
