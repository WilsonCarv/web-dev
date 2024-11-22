import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-conditional',
    imports: [NgIf],
    template: `
		@if (isAdmin) {
			<h1>Welcome Admin</h1>
		} @else {
			<h1>Welcome User</h1>
		}
		<div *ngIf="isAdmin">hello admin</div>
	`,
    styles: ``
})
export class ConditionalComponent {
	isAdmin = true;
}
