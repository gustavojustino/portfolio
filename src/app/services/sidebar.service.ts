import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  constructor() {}
  sidebarStates = new BehaviorSubject<boolean>(false);
  sidebarStates$ = this.sidebarStates.asObservable();

  toogleSidebar() {
    this.sidebarStates.next(!this.sidebarStates.value);
  }

  openSidebar() {
    this.sidebarStates.next(true);
  }

  closeSidebar() {
    this.sidebarStates.next(false);
  }


}
