import { Component } from '@angular/core';
import { EventsService } from '../../services/events.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {

  titleEvent: string = '';
  descriptionEvent: string = '';
  dateEvent: string = '';
  locationEvent: string = '';

  constructor(
    private _eventsService: EventsService, 
    private router: Router
    ) { }
  
   onSubmit() {
    const event = {
      title: this.titleEvent,
      description: this.descriptionEvent,
      date: this.dateEvent,
      location: this.locationEvent
    }
    this._eventsService.addEvent(event).subscribe((response: any) => {
      this.router.navigate(['/list-event']);
    });
  }
}
