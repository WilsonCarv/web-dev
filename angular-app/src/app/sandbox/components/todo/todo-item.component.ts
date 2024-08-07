import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-todo-item',
	standalone: true,
	imports: [],
	template: `
		<li>(TODO) React angular Essential Guide</li>
		<p>{{ taskTitle }}</p>
		<button
			(click)="onButtonClicked($event)"
			[attr.data-test-id]="dataTestId"
			type="button"
			[disabled]="formIsInvalid"
		>
			Save
		</button>
	`,
	styles: `
		li {
			color: red;
			font-weight: bold;
		}
	`,
	encapsulation: ViewEncapsulation.Emulated
})
export class TodoItemComponent {
	taskTitle = '';
	isCompleted = false;
	formIsInvalid = false;
	dataTestId = 'save-button';

	completeTask() {
		this.isCompleted = true;
	}
	updateTitle(title: string) {
		this.taskTitle = title;
	}
	onButtonClicked(event: any) {
		console.log('Button clicked', event);
	}
}
