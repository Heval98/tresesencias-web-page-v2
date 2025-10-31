import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from './contact';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: Contact }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), Contact],
})
export class ContactModule {}
