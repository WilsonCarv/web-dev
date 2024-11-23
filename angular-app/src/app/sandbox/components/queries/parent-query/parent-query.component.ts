import { Component } from '@angular/core';
import { ChildQueryComponent } from '../child-query/child-query.component';
import { DeepChildQueryComponent } from '../deep-child-query/deep-child-query.component';

@Component({
	selector: 'app-parent-query',
	imports: [ChildQueryComponent, DeepChildQueryComponent],
	templateUrl: './parent-query.component.html',
	styleUrl: './parent-query.component.scss'
})
export class ParentQueryComponent {
	age = 30;

	constructor() {}

	setAge() {
		this.age = Math.random() * 100;
	}
}
