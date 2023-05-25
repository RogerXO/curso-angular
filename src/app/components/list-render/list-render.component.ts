import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals: Animal[] = [
    {
      name: 'Belinha',
      type: 'dog',
      age: 4,
    },
    {
      name: 'Kiara',
      type: 'Dinossaur',
      age: 3,
    },
    {
      name: 'Globs',
      type: 'sloth',
      age: 7,
    },
    {
      name: 'Bob',
      type: 'Horse',
      age: 2,
    },
  ];

  animalAge: string = '';

  ShowAge(animal: Animal) {
    this.animalAge = `The ${animal.name} is ${animal.age} years old`;
  }
}
