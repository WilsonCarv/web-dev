import { AfterViewInit, Component, ElementRef, ViewChildren } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
	selector: 'app-parent',
	standalone: true,
	imports: [ChildComponent],
	templateUrl: './parent.component.html',
	styleUrl: './parent.component.scss'
})
export class ParentComponent implements AfterViewInit {
	productName: string | undefined = 'Phone';
	@ViewChildren(ChildComponent) children!: ChildComponent;
	@ViewChildren('text') textRef: any | undefined;
	myText = 'Hello World';
	onProductClicked(event: string) {
		this.productName = event;
		console.log('Product clicked', event);
	}
	ngAfterViewInit(): void {
		console.log('AfterViewInit in parent', this.children);
		this.textRef.last.nativeElement.innerHTML = 'Hello World 2';
	}
}
