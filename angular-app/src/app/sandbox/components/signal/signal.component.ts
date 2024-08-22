import { Component, computed, effect, signal } from '@angular/core';
import { interval } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
	selector: 'app-signal',
	standalone: true,
	imports: [],
	templateUrl: './signal.component.html',
	styleUrl: './signal.component.scss'
})
export class SignalComponent {
	counter$ = interval(1000);
	items = [
		{ name: 'Bike', price: 100 },
		{ name: 'TV', price: 200 },
		{ name: 'Album', price: 10 }
	];
	itemList = signal(this.items);
	totalPrice = computed(() => this.itemList().reduce((acc, item) => acc + item.price, 0));
	counter = toSignal(this.counter$, { initialValue: 0 });
	constructor() {
		effect(() => {
			console.log(this.itemList());
		});
	}
	removeItem(item: any) {
		this.itemList.set(this.itemList().filter(i => i !== item));
	}
	addItem() {
		this.itemList.set([...this.itemList(), { name: 'Car', price: 1000 }]);
	}
}
