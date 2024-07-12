import { Component, inject } from '@angular/core';
import { SidebarService } from '../../../services/sidebar.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  sidebarService = inject(SidebarService);

  toggleSidebar() {
    this.sidebarService.toogleSidebar;
  }

}
