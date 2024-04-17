import { Component } from '@angular/core';

@Component({
	selector: 'app-conditional',
	standalone: true,
	imports: [],
	template: `
		@if (isAdmin) {
			<h1>Welcome Admin</h1>
		} @else {
			<h1>Welcome User</h1>
		}
	`,
	styles: ``
})
export class ConditionalComponent {
	isAdmin = true;
}
