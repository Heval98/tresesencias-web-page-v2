import { Component } from '@angular/core';
import { FormComponent } from './components/form/form';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

}