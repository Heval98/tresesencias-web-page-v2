import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataPrivacy } from './data-privacy';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: DataPrivacy }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), DataPrivacy],
})
export class DataPrivacyModule {}
