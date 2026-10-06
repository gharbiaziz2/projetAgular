import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ContactComponent } from './contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent, data: { title: 'Page de contact' } }
];
