import { AfterViewInit, Component, ElementRef } from '@angular/core';

import { ScrollAnimationService } from '../../services/scroll-animation.service';
import { FooterComponent } from '../layout/footer/footer.component';
import { SidebarComponent } from './../layout/sidebar/sidebar.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SidebarComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit {

  constructor(
    private el: ElementRef,
    private scrollAnimationService: ScrollAnimationService
  ) {};

  ngAfterViewInit() {
    const elements = this.el.nativeElement.querySelectorAll('.form-container > *');
    this.scrollAnimationService.observeElements(Array.from(elements), 'animated');
  }

}
