import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';

import { ThemeService } from '../../../services/theme.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isSidebarHidden: boolean = window.innerHeight <= 768;

  themeServices = inject(ThemeService);

  setDarkTheme() {
    this.themeServices.setDarkTheme();
  }

  setLightTheme() {
    this.themeServices.setLightTheme();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
   this.isSidebarHidden = event.target.innerWidth <= 768;
  }

  toogleSidebar() {
    this.isSidebarHidden = !this.isSidebarHidden;
  }

}
