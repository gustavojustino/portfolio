import { AfterViewInit, Component, ElementRef } from '@angular/core';

import { ScrollAnimationService } from '../../services/scroll-animation.service';
import { FooterComponent } from '../layout/footer/footer.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [SidebarComponent, FooterComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements AfterViewInit{

  constructor(
    private el: ElementRef,
    private scrollAnimationService: ScrollAnimationService
  ) {};

  ngAfterViewInit() {
    const elements = this.el.nativeElement.querySelectorAll('.portfolio-container > *');
    this.scrollAnimationService.observeElements(Array.from(elements), 'animated')

    this.setupTabs();
  }

  setupTabs() {
    const tabs = document.querySelectorAll<HTMLElement>(".tab");
    const tabContents = document.querySelectorAll<HTMLElement>(".tab-content");

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-tab");

        if (target) {
          tabs.forEach(t => t.classList.remove("active"));
          tabContents.forEach(tc => tc.classList.remove("active"));

          tab.classList.add("active");
          const targetElement = document.getElementById(target);
          if (targetElement) {
            targetElement.classList.add("active");
          }
        }
      });
    });
  }
}
