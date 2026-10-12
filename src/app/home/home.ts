import { Component } from '@angular/core';
import { Body } from '../body/body';

@Component({
  selector: 'app-home',
  imports: [Body],
  template: `
    <section>
      <h2>Accueil</h2>
      <p>Bienvenue sur la page d'accueil.</p>
    </section>
    <app-body></app-body>
  `,
  styles: [
    `
      section {
        padding: 1rem;
      }
    `
  ]
})
export class HomeComponent {}
