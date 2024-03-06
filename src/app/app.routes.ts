import { Routes } from '@angular/router';
import { ListEventsComponent } from './list-events/list-events.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddEventComponent } from './add-event/add-event.component';

export const routes: Routes = [
    { path: '', redirectTo: 'list-event', pathMatch: 'full' },
    { path: 'list-event', component: ListEventsComponent },
    { path: 'add', component: AddEventComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
