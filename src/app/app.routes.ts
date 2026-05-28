import { Routes } from '@angular/router';
import { Home } from './home/home';
import { CarList } from './car-list/car-list';
import { CarForm } from './car-form/car-form';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home',
  },
  {
    path: 'list',
    component: CarList,
    title: 'Car List',
  },
  {
    path: 'new',
    component: CarForm,
    title: 'New Car',
  },
  {
    path: 'edit/:id',
    component: CarForm,
    title: 'Edit Car',
  },
];
