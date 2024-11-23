import { AfterViewInit, Component, ElementRef, viewChildren } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
	selector: 'app-parent',
	imports: [ChildComponent],
	templateUrl: './parent.component.html',
	styleUrl: './parent.component.scss'
})
export class ParentComponent implements AfterViewInit {
	productName: string | undefined = 'Phone';
	readonly children = viewChildren(ChildComponent);
	readonly textRef = viewChildren<ElementRef<HTMLInputElement>>('text');
	myText = 'Hello World';
	counter = 0;
	onProductClicked(event: string) {
		this.productName = event;
		console.log('Product clicked', event);
	}
	ngAfterViewInit(): void {
		console.log('AfterViewInit in parent', this.children());
		this.textRef().at(-1)!.nativeElement.innerHTML = 'Hello World 2';
	}
}
