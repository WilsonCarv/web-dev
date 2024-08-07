import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'app-loops',
	standalone: true,
	imports: [NgFor],
	template: `
		<ul>
			@for (item of ingredientList; track $index) {
				<li>{{ item.name }} ({{ item.quantity }})</li>
			}
		</ul>
		<ul>
			<li *ngFor="let item of ingredientList; index as index">{{ index + 1 }} - {{ item.name }}</li>
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
