import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section>
      <h2>Accueil</h2>
      <p>Bienvenue sur la page d'accueil.</p>
    </section>
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
