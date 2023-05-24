import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals = [
    {
      name: 'Belinha',
      type: 'dog',
    },
    {
      name: 'Kiara',
      type: 'Dinossaur',
    },
    {
      name: 'Globs',
      type: 'sloth',
    },
    {
      name: 'Bob',
      type: 'Horse',
    },
  ];
}
