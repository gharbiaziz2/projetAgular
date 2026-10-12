import { Component } from '@angular/core';
import { ConferenceDetails } from '../conference-details/conference-details';
import { CONFERENCES } from './conference-data';

@Component({
  selector: 'app-conference-list',
  imports: [ConferenceDetails],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  count = 0;

  conferences = CONFERENCES;

  increment() {
    this.count++;
  }
}
