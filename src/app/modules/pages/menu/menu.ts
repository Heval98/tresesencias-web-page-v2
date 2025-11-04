import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss']
})
export class Menu {
  sections = [
    { name: 'Cocteles', image: '/assets/menudigital.jpg', webpFile: '/assets/menudigital.webp' },
    { name: 'Destilados', image: '/assets/menudigital.jpg', webpFile: '/assets/menudigital.webp' },
    { name: 'Cervezas', image: '/assets/menudigital.jpg', webpFile: '/assets/menudigital.webp' }
  ];
  selectedSectionIndex = 0;

  selectSection(index: number) {
    this.selectedSectionIndex = index;
  }
}
