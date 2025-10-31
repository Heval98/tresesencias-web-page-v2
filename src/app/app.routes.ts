import { Routes } from '@angular/router';
import { Home } from './modules/pages/home/home';
import { Contact } from './modules/pages/contact/contact';
import { Location } from './modules/pages/location/location';

import { NotFound } from './modules/pages/not-found/not-found';
import { DataPrivacy } from './modules/pages/data-privacy/data-privacy';

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
  },

  {
    path: 'privacy-policy',
    component: DataPrivacy
  },
  {
    path: '**',
    component: NotFound
  }
];
