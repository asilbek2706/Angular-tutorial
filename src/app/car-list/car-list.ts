import { Component } from '@angular/core';
import { Car } from '../models/car';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car-list',
  imports: [FormsModule],
  templateUrl: './car-list.html',
  styleUrl: './car-list.css',
})
export class CarList {
  carName: string = 'Chevrolet Camaro';
  carYear: Date = new Date('');
  car: Car = {
    id: 1,
    name: 'Chevrolet Camaro',
    year: new Date(2020, 5, 15),
  };

  onSubmit() {
    console.log('Form submitted with values:');
    console.log('Car Name:', this.carName);
    console.log('Car Year:', this.carYear);
  }
}
