import { Component, effect, inject, input, numberAttribute } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '../../../../../node_modules/@angular/common/types/_common_module-chunk';
import { EventServices } from '../../../services/event-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-form',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './event-form.html',
  styleUrl: './event-form.css',
})
export class EventForm {
  service = inject(EventServices);
  router = inject(Router);
  id = input.required({ transform: numberAttribute });

  title = new FormControl('', Validators.required);
  lieu = new FormControl('', Validators.required);
  eventForm!: FormGroup;
  eventFBuilder!: FormGroup;

  categories: string[] = ['conf', 'seminaire', 'reunion', 'autre'];

  fb = inject(FormBuilder);
  constructor() {
    // avec form group
    this.eventForm = new FormGroup({
      titre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      date: new FormControl(''),
      lieu: new FormControl(''),
      prix: new FormControl(''),
      imageUrl: new FormControl('images/event.jpg'),
      nbPlaces: new FormControl(''),
      category: new FormControl(''),
      nbLikes: new FormControl('0'),
    });

    // avec formBuilder
    this.eventFBuilder = this.fb.group({
      titre: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[AZ][az]')]],
      description: ['', [Validators.required, Validators.maxLength(50)]],
      date: ['', Validators.required],
      lieu: ['', Validators.required],
      prix: ['', [Validators.required, Validators.min(0)]],
      imageUrl: [''],
      nbPlaces: ['', [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      nbLikes: ['0'],
    });

    //est exécuté si id existe
    effect(() => {
      const id = this.id();
      if (id !== undefined) {
        this.service.getById(id).subscribe((event) => {
          // remplir le formulaire directement avec les valeurs de l'event
          this.eventForm.patchValue(event);
        });
      }
    });
  }

  ngOnInit() {
    console.log(this.eventForm);
  }

  get titre() {
    return this.eventForm.get('titre');
  }

  submit() {
    // si id existe on fait l'update
    if (this.id()) {
      return this.service
        .update(this.id(), this.eventForm.value)
        .subscribe(() => this.router.navigate(['/events']));
    } else {
      //si non on fait l'ajout
      return this.service
        .addEvent(this.eventForm.value)
        .subscribe(() => this.router.navigate(['/events']));
    }
  }
}
