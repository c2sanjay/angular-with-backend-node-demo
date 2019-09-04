import { Component } from '@angular/core';
import { Cars } from './cars';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'Frontend';

  cars: Cars[] = [
    {
      "name": "MG Hector",
      "color": 'blue'
    },
    {
      "name": "Ford",
      "color": 'olive'
    },
    {
      "name": "Kia",
      "color": 'orange'
    },
    {
      "name": "BMW",
      "color": 'red'
    },
    {
      "name": "Jaguar",
      "color": 'green'
    },
    {
      "name": "Suzuki",
      "color": 'purple'
    }
  ];
}
