import { Component } from '@angular/core';

@Component({
	selector: 'app-loops',
	imports: [],
	template: `
		<ul>
			@for (item of ingredientList; track $index) {
				<li>{{ item.name }} ({{ item.quantity }})</li>
			}
		</ul>
		<ul>
			@for (item of ingredientList; track item; let index = $index) {
				<li>{{ index + 1 }} - {{ item.name }}</li>
			}
		</ul>
	`,
	styles: ``
})
export class LoopsComponent {
	ingredientList = [
		{ name: 'noodles', quantity: 1 },
		{ name: 'miso broth', quantity: 1 },
		{ name: 'egg', quantity: 2 }
	];
}
