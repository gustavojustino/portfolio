import { AfterViewInit, Component, ElementRef, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { ScrollAnimationService } from '../../services/scroll-animation.service';
import { FooterComponent } from '../layout/footer/footer.component';
import { SidebarComponent } from './../layout/sidebar/sidebar.component';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SidebarComponent, FooterComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit, AfterViewInit {
  @Input("formGroup") FormData!: FormGroup;
  builder = inject(FormBuilder);
  contactService = inject(ContactService);

  constructor(
    private el: ElementRef,
    private scrollAnimationService: ScrollAnimationService
  ) {};

  ngAfterViewInit() {
    const elements = this.el.nativeElement.querySelectorAll('.form-container > *');
    this.scrollAnimationService.observeElements(Array.from(elements), 'animated');
  }

  ngOnInit() {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Message: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.FormData.valid) {
      this.contactService.PostMessage(this.FormData.value).subscribe(
        response => {
          location.href = 'https://mailthis.to/confirm';
          console.log(response);
        },
        error => {
          console.warn(error.responseText);
          console.log({ error });
        }
      );
    }
  }


}
