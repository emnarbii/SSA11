import { Routes } from '@angular/router';
import { Home } from './core/home/home';
import { EventList } from './event-list/event-list';
import { NotFound } from './core/not-found/not-found';

export const routes: Routes = [
  
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'home', component: Home },

  { path: 'events', component: EventList },
  { path: '**', component: Home },
];
