import { Routes } from '@angular/router';
import { Home } from './core/home/home';
import { EventList } from './features/event/event-list/event-list';
import { NotFound } from './core/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'home', component: Home },
  {
    path: 'events',
    loadChildren: () => import('./features/event/events.routes').then((m) => m.event_routes),
  },
  { path: '**', component: Home },
];
