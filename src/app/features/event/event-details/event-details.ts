import { Component, computed, effect, inject, input, numberAttribute, signal } from '@angular/core';
import { Event } from '../../../models/Event';
import { ActivatedRoute } from '@angular/router';
import { EventServices } from '../../../services/event-services';

@Component({
  selector: 'app-event-details',
  imports: [],
  templateUrl: './event-details.html',
  styleUrl: './event-details.css',
})
export class EventDetails {
  event = signal<Event | undefined>(undefined);
  idAct!: number;
  id = input.required({ transform: numberAttribute });
  actnew = inject(ActivatedRoute);
  eventService = inject(EventServices);
  //solution1:  computed: calcule auto la valeur de l'id en cas de changement
  evenComputed = computed(() => this.eventService.getById(this.id()));

  constructor(private act: ActivatedRoute) {
    // solution2:effect  capte automatiquement le changement de l'id

     effect(() => {
      next: this.eventService.getById(this.id()).subscribe((event) => this.event.set(event));
      error: () => console.error('event non trouvé');
    });
  }

  ngOnInit() {
    console.log(this.act);
    this.idAct = this.act.snapshot.params['id'];

    console.log(this.eventService.getById(this.id()));
  }

  // filterById() {
  //   this.event=this.events().filter((event) => event.id === this.id)[0];
  // }
}
