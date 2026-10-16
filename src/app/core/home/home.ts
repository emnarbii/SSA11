import { Component, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventList } from '../../event-list/event-list';

@Component({
  selector: 'app-home',
  imports: [FormsModule, EventList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  eventName= 'Et';
  name= signal("test")
  imgPath =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTagtkZFiTpM1U1HLxbAOq2hIxBrHH31T_UsmxyO9XUfA&s=10';
  inputItem: String = '';
  click() {
    return alert('Vous avez cliqué sur le bouton Créer un événement !');
  }
}
