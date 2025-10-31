import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-contact-form',
	templateUrl: './form.html',
	styleUrls: ['./form.scss']
})
export class FormComponent {
	contactForm: FormGroup;
	submitted = false;

	constructor(private fb: FormBuilder) {
		this.contactForm = this.fb.group({
			name: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			message: ['', Validators.required]
		});
	}

	onSubmit() {
		this.submitted = true;
		if (this.contactForm.valid) {
			// Handle form submission (e.g., send to API or show a success message)
			console.log('Form submitted:', this.contactForm.value);
			this.contactForm.reset();
			this.submitted = false;
		}
	}
}
