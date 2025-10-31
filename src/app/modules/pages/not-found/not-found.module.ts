import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFound } from './not-found';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: NotFound }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), NotFound],
})
export class NotFoundModule {}
