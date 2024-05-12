import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
	selector: 'app-parent',
	standalone: true,
	imports: [ChildComponent],
	templateUrl: './parent.component.html',
	styleUrl: './parent.component.scss'
})
export class ParentComponent {
	productName: string | undefined = 'Phone';
	onProductClicked(event: string) {
		console.log('Product clicked', event);
	}
}
