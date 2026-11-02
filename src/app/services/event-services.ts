import { inject, Injectable, signal } from '@angular/core';
import { Event } from '../models/Event';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventServices {
  http = inject(HttpClient);
  uri = 'http://localhost:3000/events';

  getList() {
    return this.http.get<Event[]>(this.uri);
  }

  getById(id: number) {
    // return this.http.get<Event>(this.uri+"/id");
    return this.http.get<Event>(`${this.uri}/${id}`);
  }

  addEvent(event: Omit<Event, 'id'>) {
    return this.http.post<Event>(this.uri, event);
  }

  update(id: number, event: Event) {
    return this.http.put<Event>(`${this.uri}/${id}`, event);
  }

  delete(id: number) {
    return this.http.delete<Event>(`${this.uri}/${id}`);
  }
}
