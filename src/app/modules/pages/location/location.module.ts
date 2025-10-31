import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from './location';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: Location }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), Location],
})
export class LocationModule {}
