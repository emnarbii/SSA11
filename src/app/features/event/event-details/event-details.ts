import { Component, inject, input, signal } from '@angular/core';
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
  event:Event|undefined;
  id!: number;
  idInput=input.required<number>()
  constructor(private act: ActivatedRoute) {}
  actnew = inject(ActivatedRoute);
  eventService=inject(EventServices);

  ngOnInit() {
    console.log(this.act);
    this.id = this.act.snapshot.params['id'];
   console.log(this.eventService.getById(this.idInput()))
  }


  

  // filterById() {
  //   this.event=this.events().filter((event) => event.id === this.id)[0];
  // }
}
