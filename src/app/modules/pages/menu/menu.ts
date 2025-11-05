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
    { name: 'Cocteles', image: '/assets/menudigital-01.png', webpFile: '/assets/menudigital-01.webp' },
    { name: 'Destilados', image: '/assets/menudigital-02.png', webpFile: '/assets/menudigital-02.webp' },
    { name: 'Cerveza y Agua', image: '/assets/menudigital-03.png', webpFile: '/assets/menudigital-03.webp' }
  ];
  selectedSectionIndex = 0;

  selectSection(index: number) {
    this.selectedSectionIndex = index;
  }
}
