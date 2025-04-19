import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { AboutUsPageComponent } from '../about-us-page/about-us-page.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
@Component({
  selector: 'app-sidebar',
  imports: [
    ProfileComponent,
    AboutUsPageComponent,
    HomePageComponent,
    ContactUsComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  imgurl = 'assets/iih.png';
  currentPage = '';
  showCurrent(page: string) {
    this.currentPage = page;
  }
}
