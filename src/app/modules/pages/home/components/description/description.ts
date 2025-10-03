import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cocktail } from '../../../../../shared/models/cocktail.model';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './description.html',
  styleUrl: './description.scss'
})
export class Description implements OnInit {
  constructor() {}
  cocktails: Cocktail[] = [];

  ngOnInit() {
    this.cocktails = [
      {
        name: 'Dulce de leche y Tequila',
        image: 'assets/arequipe-tequila.jpg'
      },
      {
        name: 'Chocolate Tequila',
        image: 'assets/chocolate-tequila.jpg'
      }
    ];
  }
}
