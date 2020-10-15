import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  minDate = new Date(2020, 10, 15);
  maxDate = new Date(2020, 11, 15);
}
