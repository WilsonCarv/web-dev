import { Component } from '@angular/core';

@Component({
	selector: 'app-deep-child-query',
	standalone: true,
	imports: [],
	templateUrl: './deep-child-query.component.html',
	styleUrl: './deep-child-query.component.scss'
})
export class DeepChildQueryComponent {
	name: string = 'John';
}
