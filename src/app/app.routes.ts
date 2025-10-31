import { Routes } from '@angular/router';
import { Home } from './modules/pages/home/home';
import { Contact } from './modules/pages/contact/contact';
import { Location } from './modules/pages/location/location';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'contact',
    component: Contact
  },
  {
    path: 'location',
    component: Location
  }
];
