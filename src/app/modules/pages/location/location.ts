import { Component } from '@angular/core';

@Component({
	selector: 'app-location',
	standalone: true,
	imports: [],
	templateUrl: './location.html',
	styleUrls: ['./location.scss']
})
export class Location {
	latitude = 4.697576;
	longitude = -74.045873;
}
