import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Description } from './components/description/description';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, Description],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
