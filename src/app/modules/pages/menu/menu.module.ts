import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu } from './menu';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: Menu }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), Menu],
})
export class MenuModule {}
