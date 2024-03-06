import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  public apiUrl = 'http://localhost:3000';

  constructor(private _httpclient: HttpClient) { }

  public getEvents() {
    return this._httpclient.get<any[]>(`${this.apiUrl}/events`).pipe();
  }
}
