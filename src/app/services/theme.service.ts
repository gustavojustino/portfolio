import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private activeTheme: string = 'dark-theme';

  constructor() {
    this.activeTheme = localStorage.getItem('theme') || 'dark-theme';
    document.body.className = this.activeTheme;
  }


  setDarkTheme() {
    this.activeTheme = 'dark-theme';
    document.body.className = this.activeTheme;
    localStorage.setItem('theme', this.activeTheme);
  }

  setLightTheme() {
    this.activeTheme = 'light-theme';
    document.body.className = this.activeTheme;
    localStorage.setItem('theme', this.activeTheme);
  }
}
