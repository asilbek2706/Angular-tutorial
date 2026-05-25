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
  cars: Car[] = [
    {
      id: 1,
      name: 'Chevrolet Camaro',
      year: new Date(2020, 5, 15),
    },
  ];

  onSubmit() {
    if (this.carName.length != 0 && this.carYear) {
      const newCar: Car = {
        id: this.cars.length + 1,
        name: this.carName,
        year: this.carYear,
      };
      this.cars.push(newCar);
      this.carName = '';
      this.carYear = new Date('');
      console.log(this.cars);
    }
  }
}
