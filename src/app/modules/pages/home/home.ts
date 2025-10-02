import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Header } from '../../../shared/components/header/header';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, Header],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
