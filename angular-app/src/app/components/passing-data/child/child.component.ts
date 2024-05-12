import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-child',
	standalone: true,
	imports: [NgIf],
	templateUrl: './child.component.html',
	styleUrl: './child.component.scss'
})
export class ChildComponent {
	@Input({ required: true, alias: 'productName' }) productName: string | undefined;
	@Output() productClicked = new EventEmitter<string>();
}
