
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Contact } from './contact';
import { FormComponent } from './components/form/form';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: Contact }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    Contact,
    FormComponent
  ],
})
export class ContactModule {}
