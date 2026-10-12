import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ContactComponent } from './contact/contact';
import { ConferenceList } from './conference-list/conference-list';
import { ConferenceDetails } from './conference-details/conference-details';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent, data: { title: 'Page de contact' } },
  { path: 'conferences', component: ConferenceList },
  { path: 'conferences/:id', component: ConferenceDetails },
  { path: '**', redirectTo: 'home' }
];
