import { Injectable, signal } from '@angular/core';
import { Event } from '../models/Event';

@Injectable({
  providedIn: 'root',
})
export class EventServices {
  events = signal<Event[]>([
    {
      id: 1,
      titre: 'Angular Workshops',
      description: 'Découvrez les nouveautés d Angular et développez vos compétences.',
      date: new Date('2026-10-15'),
      lieu: 'Tunis',
      prix: 50,
      imageUrl: 'images/even1.jpg',
      nbPlaces: 100,
      category: 'Technologie',
      nbLikes: 0,
    },
    {
      id: 2,
      titre: 'Music Festival 2026',
      description: 'Un festival musical avec plusieurs artistes et groupes.',
      date: new Date('2026-12-22'),
      lieu: 'Sousse',
      prix: 80,
      imageUrl: 'images/event.jpg',
      nbPlaces: 0,
      category: 'Musique',
      nbLikes: 0,
    },
    {
      id: 3,
      titre: 'AI & Innovation Conference',
      description: 'Une conférence consacrée à l intelligence artificielle et à l innovation.',
      date: new Date('2026-11-18'),
      lieu: 'Hammamet',
      prix: 100,
      imageUrl: 'images/event.jpg',
      nbPlaces: 150,
      category: 'Technologie',
      nbLikes: 0,
    },
    {
      id: 4,
      titre: 'Startup Meetup',
      description: 'Une rencontre entre entrepreneurs, étudiants et professionnels.',
      date: new Date('2026-11-05'),
      lieu: 'Tunis',
      prix: 30,
      imageUrl: 'images/event.jpg',
      nbPlaces: 10,
      category: 'Business',
      nbLikes: 0,
    },
  ]);

  getList() {
    return this.events;
  }

  getById(id: number) {
    return this.events().filter((event) => event.id === id)[0];
  }
}
