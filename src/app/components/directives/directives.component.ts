import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  fontSize = 12
  color = "blue"

  classes = ['green-title', 'small-title']
  bigTitle = 'big-title'
}
