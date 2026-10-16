import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';
import { Home } from './core/home/home';
import { EventList } from './event-list/event-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Home, EventList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('SSA11');
}
