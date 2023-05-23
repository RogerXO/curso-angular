import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = "Kiko zinho"
  userData = {
    email: "kiko@email.com",
    role: "Mecanic"
  }
}
