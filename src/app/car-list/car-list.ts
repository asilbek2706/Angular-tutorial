import { Component, inject } from '@angular/core';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-car-list',
  imports: [],
  templateUrl: './car-list.html',
  styleUrl: './car-list.css',
  standalone: true,
})
export class CarList {
  reservationService = inject(CarService);

  constructor() {
    console.log(this.reservationService.getReservations());
  }
}
