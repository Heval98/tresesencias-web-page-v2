import { Routes } from '@angular/router';
import { Home } from './modules/pages/home/home';
import { Contact } from './modules/pages/contact/contact';
import { Location } from './modules/pages/location/location';

import { NotFound } from './modules/pages/not-found/not-found';
import { DataPrivacy } from './modules/pages/data-privacy/data-privacy';
import { Menu } from './modules/pages/menu/menu';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/pages/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./modules/pages/location/location.module').then(m => m.LocationModule)
  },

  {
    path: 'privacy-policy',
    loadChildren: () => import('./modules/pages/data-privacy/data-privacy.module').then(m => m.DataPrivacyModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./modules/pages/menu/menu.module').then(m => m.MenuModule)
  },
  {
    path: '**',
    loadChildren: () => import('./modules/pages/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];
