import { Component } from '@angular/core';
import { EventsService } from '../../services/events.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrl: './list-events.component.css'
})
export class ListEventsComponent {

  events: any[] = [];
  isModalOpen: boolean = false;
  selectedEventId: string = '';

  constructor(
    private _eventsService: EventsService,
    private router: Router
    ) { }

  ngOnInit() {
    this._eventsService.getEvents().subscribe((listEvent: any[]) => {
      this.events = listEvent;
    });
  }

  navigateToAddEvent() {
    this.router.navigate(['/add-event']);
  }

  openConfirmModal(idEvent: string) {
    this.isModalOpen = true;
    this.selectedEventId = idEvent;
  }
}
