import { Component, computed, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONFERENCES, Conference } from '../conference-list/conference-data';

@Component({
  selector: 'app-conference-details',
  imports: [RouterLink],
  templateUrl: './conference-details.html',
  styleUrl: './conference-details.css',
})
export class ConferenceDetails {
  conference = input<Conference>();
  id = input<string>();
  increment = output<void>();

  readonly selectedConference = computed(() => {
    const conference = this.conference();
    if (conference) {
      return conference;
    }

    const id = Number(this.id());
    return CONFERENCES.find((item) => item.id === id);
  });

  incrementCount() {
    this.increment.emit();
  }
}
