import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SortByPipe } from '../../pipes/sort-by.pipe';
import { HighlightDirective } from '../../directives/highligth.directive';

@Component({
    selector: 'app-binding',
    imports: [CommonModule, FormsModule, SortByPipe, HighlightDirective],
    templateUrl: './binding.component.html',
    styleUrl: './binding.component.scss'
})
export class BindingComponent {
	isButtonDisabled = false;
	color = 'red';
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
	numbers = [5, 6, 1, 3, 8, 2, 4, 7];

	onMouseEnter(event: any) {
		console.log('Mouse enter', event);
		console.log(this.phoneNumber);
	}
}
