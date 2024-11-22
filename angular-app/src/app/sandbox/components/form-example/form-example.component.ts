import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-form-example',
    imports: [ReactiveFormsModule],
    templateUrl: './form-example.component.html',
    styleUrl: './form-example.component.scss'
})
export class FormExampleComponent {
	exampleForm: FormGroup;

	constructor() {
		const formBuilder = inject(FormBuilder);

		this.exampleForm = formBuilder.group({
			email: '',
			password: ''
		});
	}
	onSubmit() {
		console.log(this.exampleForm.value);
	}
}
