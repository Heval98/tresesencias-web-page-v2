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
          description: 'Descripción del producto de ejemplo.',
          image: '/assets/menudigi',
          status: 'INSTOCK'
        },
        {
          id: '2',
          name: 'Producto de ejemplo',
          description: 'Descripción del producto de ejemplo.',
          image: '/assets/menud',
          status: 'INSTOCK'
        },
        {
          id: '3',
          name: 'Producto de ejemplo',
          description: 'Descripción del producto de ejemplo.',
          image: '/assets/f',
          status: 'INSTOCK'
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
