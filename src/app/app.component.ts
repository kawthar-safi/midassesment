import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SidebarComponent, LoginComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'midAssement';
}
