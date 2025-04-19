import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  username: string | null = null;

  setUsername(name: string): void {
    this.username = name;
  }
  isLoggingIn: boolean = false;
  login() {
    this.isLoggingIn = true;
  }
  logout() {
    this.username = null;
    this.isLoggingIn = false;
  }
}
