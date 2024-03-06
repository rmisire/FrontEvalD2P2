import { Routes } from '@angular/router';
import { ListEventsComponent } from './list-events/list-events.component';

export const routes: Routes = [
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'events', component: ListEventsComponent },
];
