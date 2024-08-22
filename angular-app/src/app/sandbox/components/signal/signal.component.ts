import { Component, computed, effect, OnInit, signal } from '@angular/core';

@Component({
	selector: 'app-signal',
	standalone: true,
	imports: [],
	templateUrl: './signal.component.html',
	styleUrl: './signal.component.scss'
})
export class SignalComponent {
	items = [
		{ name: 'Bike', price: 100 },
		{ name: 'TV', price: 200 },
		{ name: 'Album', price: 10 }
	];
	itemList = signal(this.items);
	totalPrice = computed(() => this.itemList().reduce((acc, item) => acc + item.price, 0));
	constructor() {
		effect(() => {
			console.log(this.itemList());
		});
	}
	removeItem(item: any) {
		this.itemList.set(this.itemList().filter(i => i !== item));
	}
}
