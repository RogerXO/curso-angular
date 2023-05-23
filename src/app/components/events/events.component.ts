import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent {
  showMsg: boolean = false;
  ShowMessage(): void {
    this.showMsg = !this.showMsg;
  }

  text = 'Mouse out';
  MouseEnter = () => {
    this.text = 'Mouse in';
  };
  MouseLeave(): void {
    this.text = 'Mouse out';
  }
}
