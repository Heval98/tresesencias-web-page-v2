import { Routes } from '@angular/router';
import { Contact } from './modules/pages/contact/contact';
import { Location } from './modules/pages/location/location';

import { NotFound } from './modules/pages/not-found/not-found';
import { DataPrivacy } from './modules/pages/data-privacy/data-privacy';
import { Menu } from './modules/pages/menu/menu';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./modules/pages/home/home').then(m => m.Home)
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/pages/contact/contact').then(m => m.Contact)
  },
  {
    path: 'location',
    loadChildren: () => import('./modules/pages/location/location.module').then(m => m.LocationModule)
  },
  {
    path: 'cocktails',
    loadChildren: () => import('./modules/pages/cocktails/cocktails.module').then(m => m.CocktailsModule)
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
