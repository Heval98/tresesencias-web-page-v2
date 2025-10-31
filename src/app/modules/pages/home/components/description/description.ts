import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cocktail } from '../../../../../shared/models/cocktail.model';
import { SectionItems } from '../../../../../shared/models/sectionItems.model';
import { trigger, style, animate, state, transition } from '@angular/animations';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './description.html',
  styleUrl: './description.scss',
  animations: [
    trigger('slideDown', [
      state('closed', style({
        height: '0',
        opacity: 0,
        overflow: 'hidden'
      })),
      state('open', style({
        height: '*',
        opacity: 1,
        overflow: 'hidden'
      })),
      transition('closed <=> open', [
        animate('300ms ease-in-out')
      ])
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class Description implements OnInit {
  items: SectionItems[] = [
    {
      sectionId: 'descripcion',
      metaTitle: 'Tresesencias | Bar en Bogotá norte con cocteles cremosos y tragos tradicionales',
      metaContent: 'Tresesencias es un bar en el norte de Bogotá, en Pepe Sierra. Ofrecemos cervezas, tragos, botellas y nuestra especialidad: cocteles cremosos con textura única y sabor sorprendente.',
      title: 'Tresesencias',
      mainContent: 'Bienvenido a <strong>Tresesencias</strong>, un bar en Bogotá que mezcla lo mejor del estilo tradicional con la innovación. Aquí encuentras cervezas frías, tragos, botellas y algo que no verás en ningún otro bar: cocteles cremosos con sabores inesperados y una textura suave que conquista desde la primera cucharada.',
      auxContent: 'Un ambiente elegante, relajado y perfecto para compartir con amigos. Ven y disfruta de tus bebidas favoritas o atrévete a probar una experiencia diferente.',
      isOpen: false
    },
    {
      sectionId: 'catering-eventos',
      metaTitle: 'Catering y Eventos – Tresesencias',
      metaContent: 'Catering y Eventos – Fiestas - Matrimonios - Ferias - Fiestas - Tresesencias',
      title: 'Catering & Eventos',
      mainContent: '¿Buscas un toque diferente para tu evento o empresa? Lleva la experiencia <strong>Tresesencias</strong> a tus celebraciones. Ofrecemos nuestra propuesta diferente de cocteles cremosos para matrimonios, ferias, fiestas o activaciones de marca.',
  auxContent: 'Estamos ubicados en Pepe Sierra, Bogotá norte. Déjanos tus datos y te contactaremos para crear una propuesta a tu medida.',
      isOpen: false
    },
    {
      sectionId: 'sobre-nosotros',
      metaTitle: 'Sobre Tresesencias – Bar elegante y relajado en Bogotá',
      metaContent: 'Bar elegante y relajado en Bogotá',
      title: 'Sobre Nosotros',
      mainContent: 'En <strong>Tresesencias</strong>, tres amigos decidimos reinventar la experiencia de bar. Combinamos lo clásico —buen ambiente, cervezas, tragos y botellas— con una propuesta innovadora: <strong>cocteles cremosos</strong> que transforman el sabor en una experiencia sensorial.',
      auxContent: 'Somos un bar en Bogotá, con un ambiente elegante, minimalista y relajado, pensado para que disfrutes entre amigos sin perder el estilo.',
      isOpen: false
    },
    {
      sectionId: 'opina',
      metaTitle: 'Tu opinión cuenta – Reseñas de Tresesencias',
      metaContent: 'Tu opinión cuenta – Reseñas de Tresesencias',
      title: 'Opina',
      mainContent: '¿Ya nos visitaste? Cuéntanos cómo te fue y ayuda a otros a descubrir este nuevo concepto. Tu opinión nos motiva a seguir ofreciendo lo mejor de nosotros.',
      auxContent: '<a href="https://g.page/r/tu-enlace-de-google-maps" target="_blank" class="google-review-link" rel="noopener">Califícanos en Google</a>',
      isOpen: false
    }
  ];

  constructor(private router: Router) {}
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

  goToContactRoute() {
    console.log('Navigating to contact route');
    this.router.navigate(['/contact']);
  }

  toggle(index: number) {
    this.items[index].isOpen = !this.items[index].isOpen;
  }

  toggleSingle(index: number) {
    this.items.forEach((item, i) => {
      item.isOpen = i === index ? !item.isOpen : false;
    });
  }
}
