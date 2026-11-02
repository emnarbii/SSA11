import { Component, inject, signal } from '@angular/core';
import { Event } from '../../../models/Event';
import { CommonModule } from '@angular/common';
import { EventServices } from '../../../services/event-services';
import { RouterLink } from '@angular/router';
import { Card } from '../../../core/card/card';

@Component({
  selector: 'app-event-list',
  imports: [CommonModule, RouterLink,Card],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css',
})
export class EventList {
  title = 'liste des événements';
  titre = signal('Liste des événements');
  events=signal<Event[]>([])

  //injection avec inject()
  eventService=inject(EventServices);

  //injection dans le constructeur
  constructor(private eventS:EventServices) {
    this.title = 'liste';
    this.titre.set('event List');
    // this.events=this.eventService.getList();
    this.eventService.getList().subscribe(data=> this.events.set(data))
  }


  incrementerLikes(event: any) {
    event.nbLikes++;
  }

  // isHighlighted(category: string): boolean {
  //   if (category === 'Technologie') return true;
  //   return false;
  // }


}
