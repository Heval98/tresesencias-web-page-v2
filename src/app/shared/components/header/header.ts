import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  isMenuOpen = false;

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click')
  onClickOutsideMenu() {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  toggleMenu(event: Event) {
    event.stopPropagation(); 
    this.isMenuOpen = !this.isMenuOpen;
  }
}
