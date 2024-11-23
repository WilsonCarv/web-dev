import { Component } from '@angular/core';

@Component({
	selector: 'app-conditional',
	imports: [],
	template: `
		@if (isAdmin) {
			<h1>Welcome Admin</h1>
		} @else {
			<h1>Welcome User</h1>
		}
		@if (isAdmin) {
			<div>hello admin</div>
		}
	`,
	styles: ``
})
export class ConditionalComponent {
	isAdmin = true;
}
