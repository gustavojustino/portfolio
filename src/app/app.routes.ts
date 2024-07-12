import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "portfolio", component: PortfolioComponent},
  {path: "contact", component: ContactComponent},
  {path: "blog", component: HomeComponent},
  {path: "admin", canActivate: [], component: HomeComponent}
];
