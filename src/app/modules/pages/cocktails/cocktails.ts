import { Component } from '@angular/core';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.html',
  styleUrls: ['./cocktails.scss']
})
export class CocktailsComponent {
  cocktails = [
    { name: 'Mojito', description: 'Refreshing mint and lime.' },
    { name: 'Piña Colada', description: 'Pineapple and coconut delight.' },
    { name: 'Strawberry Daiquiri', description: 'Sweet strawberry and rum.' },
    { name: 'Margarita', description: 'Classic lime and tequila.' },
    { name: 'Blue Lagoon', description: 'Vibrant blue with citrus notes.' },
    // Add more flavors as needed
  ];
}
