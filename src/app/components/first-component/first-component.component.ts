import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent {
  name: string = 'Jhon travolta';
  age: number = 16;
  job: string = 'Software Developer';
  testData = 'Testing more than one parent';
}
