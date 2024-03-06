import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  public apiUrl = 'http://localhost:3000';

  constructor(private _httpclient: HttpClient) {

   }

  public getEvents() {
    return this._httpclient.get<any[]>(`${this.apiUrl}/events`).pipe();
  }

  public addEvent(event: any) {
    return this._httpclient.post<any[]>(`${this.apiUrl}/event`, event).pipe();
  }

  public deleteEvent(id: string) {
    return this._httpclient.delete<any[]>(`${this.apiUrl}/event/${id}`).pipe();
  }
}
