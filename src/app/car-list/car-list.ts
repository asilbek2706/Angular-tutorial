import { Component } from '@angular/core';
import { Car } from '../models/car';

@Component({
  selector: 'app-car-list',
  imports: [],
  templateUrl: './car-list.html',
  styleUrl: './car-list.css',
})
export class CarList {
  carName: string = 'Chevrolet Camaro';
  car: Car = {
    id: 1,
    name: 'Chevrolet Camaro',
    year: new Date(2020, 5, 15),
  };
}
