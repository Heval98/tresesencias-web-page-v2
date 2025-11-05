import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu } from './menu';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: Menu }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), Menu, MatIconModule],
})
export class MenuModule {}
