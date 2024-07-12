import { AfterViewInit, Component, ElementRef } from '@angular/core';

import { ScrollAnimationService } from './../../../services/scroll-animation.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements AfterViewInit {

  constructor(
    private el: ElementRef,
    private scrollAnimationService: ScrollAnimationService
  ) {};

  ngAfterViewInit() {
    const elements = this.el.nativeElement.querySelectorAll('.main-container > *');
    this.scrollAnimationService.observeElements(Array.from(elements), 'animated');
  }
}
