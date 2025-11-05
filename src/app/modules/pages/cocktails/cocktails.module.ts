


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CocktailsComponent } from './cocktails';
import { COCKTAILS_ROUTES } from './cocktails.routes';

@NgModule({
			imports: [
				CommonModule,
				RouterModule.forChild(COCKTAILS_ROUTES),
				CocktailsComponent
				// Add child modules here, e.g. FlavorsModule
			]
})
export class CocktailsModule {}

