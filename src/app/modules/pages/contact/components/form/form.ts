import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-contact-form',
	templateUrl: './form.html',
	styleUrls: ['./form.scss']
})

export class FormComponent {
	@ViewChild('contactForm') contactForm!: ElementRef<HTMLFormElement>;

	onSubmit() {
		// Timeout to allow native submit to Google Forms
		setTimeout(() => {
			this.contactForm?.nativeElement.reset();
		}, 100);
	}
}
