import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section>
      <h2>Contact</h2>
      <p>Page de contact.</p>
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
export class ContactComponent {}
