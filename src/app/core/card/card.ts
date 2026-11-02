import { Component, input, output } from '@angular/core';
import { Event } from '../../models/Event';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [CommonModule,RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {

  ev=input.required<Event>()
  incrementLikes=output<Event>()

  
    isHighlighted(category: string): boolean {
    if (category === 'Technologie') return true;
    return false;
  }
}
