import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list/list.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
})
export class ItemDetailsComponent {
  constructor(
    private listService: ListService,
    private router: ActivatedRoute
  ) {
    this.getAnimal();
  }

  animal?: Animal;

  getAnimal() {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.listService
      .getAnimal(id)
      .subscribe((animal) => (this.animal = animal));
  }
}
