import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Product } from '../../../../../shared/models/product.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, CarouselModule, ButtonModule, TagModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {

  responsiveOptions: any[] | undefined;
  products: Product[] | any;

  constructor() {}

  ngOnInit() {
      this.products = [
        {
          id: '1',
          name: 'Producto de ejemplo',
          description: '¿GELATO O COCTEL?',
          description2: 'LO MEJOR DE AMBOS MUNDOS',
          image: '/assets/arequipe-tequila.jpg',
          styleClass: 'right-text'
        },
        {
          id: '2',
          name: 'Producto de ejemplo',
          description: '¿TIENES UN EVENTO?',
          description2: 'NOSOTROS TE CUBRIMOS',
          image: '/assets/foto-grupo-vasos.jpg',
          styleClass: 'left-text'
        }
      ];

      this.responsiveOptions = [
          {
              breakpoint: '2000px',
              numVisible: 1,
              numScroll: 1
          }
      ]
  }

  getSeverity(status: string) {
      switch (status) {
          case 'INSTOCK':
              return 'success';
          case 'LOWSTOCK':
              return 'warn';
          case 'OUTOFSTOCK':
              return 'danger';
          default:
              return 'info';
      }
  }
}
