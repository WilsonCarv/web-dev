import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-binding',
	standalone: true,
	imports: [CommonModule, FormsModule],
	templateUrl: './binding.component.html',
	styleUrl: './binding.component.scss'
})
export class BindingComponent {
	isButtonDisabled = false;
	productName = 'Phone';
	phoneNumber = '8831-4528';
	isError = true;
	myBirthday = new Date(1994, 4, 31);
	salary = 2877;
	address = {
		street: '123 Main St',
		city: 'New York',
		state: 'NY'
	};

	onMouseEnter(event: any) {
		console.log('Mouse enter', event);
		console.log(this.phoneNumber);
	}
}
