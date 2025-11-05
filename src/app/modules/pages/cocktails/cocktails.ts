import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.html',
  styleUrls: ['./cocktails.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CocktailsComponent {
  cocktails = [
    { name: 'Manifest', description: 'Margarita Fresa Limón', image: 'assets/Manifest.jpg', altDescription: 'La clásica margarita (tequila y triple sec) con un toque especial de fresa y limón para refrescar tu paladar.' },
    { name: 'Macrocosmos', description: 'Bluelagoon con Arándanos', image: 'assets/Macrocosmos.jpg', altDescription: 'Un cóctel muy refrescante con toques frutales que vienen del arándano y blue curaçao.' },
    { name: 'Absurdismos', description: 'Chocolate y Tequila', image: 'assets/Absurdismos.jpg', altDescription: 'Una mezcla inesperada de chocolate oscuro y tequila que sorprende al paladar.' },
    { name: 'Correspondencia', description: 'Tequila y Toronja', image: 'assets/Correspondencia.jpg', altDescription: 'Tequila con jugo fresco de toronja, ideal para quienes buscan sabores cítricos.' },
    { name: 'Equilibrio', description: 'Mojito de Sandía', image: 'assets/Equilibrio.jpg', altDescription: 'Mojito clásico con un toque de sandía para un sabor más dulce y refrescante.' },
    { name: 'Latido', description: 'Vodka Fresa y Vainilla', image: 'assets/Latido.jpg', altDescription: 'Vodka infusionado con fresa y vainilla, suave, aromático y dulce.' },
    { name: 'Mirage', description: 'Whisky con Amaretto y Chocoavellanas', image: 'assets/Mirage.jpg', altDescription: 'Whisky, amaretto y chocoavellanas en armonía para un cóctel sofisticado.' },
    { name: 'Omnipresent', description: 'Piña Colada', image: 'assets/Omnipresent.jpg', altDescription: 'La clásica piña colada tropical, cremosa y refrescante.' },
    { name: 'Polaridad', description: 'Dulce de leche y Tequila', image: 'assets/Polaridad.jpg', altDescription: 'Dulce de leche fusionado con tequila, una combinación única y deliciosa.' },
    { name: 'Punto Medio', description: 'Moscow Mule', image: 'assets/Punto-medio.jpg', altDescription: 'Moscow Mule tradicional, servido frío y cremoso.' },
    { name: 'Ritmo', description: 'Baileys', image: 'assets/Ritmo.jpg', altDescription: 'Coctel cremoso con Baileys, perfecto para los amantes de los sabores suaves y tradicionales.' },
  ];

  selectedCocktail: any = null;

  openModal(cocktail: any) {
    this.selectedCocktail = cocktail;
  }

  closeModal() {
    this.selectedCocktail = null;
  }
}
