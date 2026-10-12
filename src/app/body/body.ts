import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-body',
  imports: [],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {
  amis = ['Ahmed', 'seddiki', 'mohamed', 'Mariem'];
  count = 0;
  counts = signal(0);

  incrementSimple() {
    this.count++;
  }

  incrementWithSignal() {
    this.counts.update((v) => v + 1);
  }
}