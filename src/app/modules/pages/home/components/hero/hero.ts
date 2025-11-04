import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
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
  heroImage: string = '/assets/hero-image.jpg';
  heroImageWebp: string = '/assets/hero-image.webp';


  currentSlide: number = 0;
  autoplayInterval: any;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      this.heroImage = '/assets/hero-image.jpg';
      this.heroImageWebp = '/assets/hero-image.webp';
    });

    this.products = [
      {
        id: '1',
        name: 'Imagen coctel congelado dulce de leche y tequila',
        description: '¿GELATO O COCTEL?',
        description2: 'LO MEJOR DE AMBOS MUNDOS',
        image: '/assets/arequipe-tequila.jpg',
        imageWebp: '/assets/arequipe-tequila.webp',
        styleClass: 'right-text'
      },
      {
        id: '2',
        name: 'Foto grupal con cocteles de tresesencias',
        description: '¿TIENES UN EVENTO?',
        description2: 'NOSOTROS TE CUBRIMOS',
        image: '/assets/foto-grupo-vasos.jpg',
        imageWebp: '/assets/foto-grupo-vasos.webp',
        styleClass: 'left-text'
      }
    ];

    this.responsiveOptions = [
      {
        breakpoint: '2000px',
        numVisible: 1,
        numScroll: 1
      }
    ];

    this.startAutoplay();
  }

  startAutoplay() {
    this.clearAutoplay();
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  clearAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }

  nextSlide() {
    if (!this.products || this.products.length === 0) return;
    this.currentSlide = (this.currentSlide + 1) % this.products.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.startAutoplay(); 
  }

  ngOnDestroy() {
    this.clearAutoplay();
  }
}
