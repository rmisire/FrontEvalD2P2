import { Component } from '@angular/core';
import { EventsService } from '../../services/events.service'

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrl: './list-events.component.css'
})
export class ListEventsComponent {

  events: any[] = [];

  constructor(private _eventsService: EventsService) { }

  ngOnInit() {
    this._eventsService.getEvents().subscribe((listEvent: any[]) => {
      this.events = listEvent;
    });
  }
}
