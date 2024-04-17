import { Component } from '@angular/core';

@Component({
	selector: 'app-todo-item',
	standalone: true,
	imports: [],
	template: `
		<li>(TODO) React angular Essential Guide</li>
		<p>{{ taskTitle }}</p>
		<button type="button" [disabled]="formIsInvalid">Save</button>
	`,
	styles: `
		li {
			color: red;
			font-weight: bold;
		}
	`
})
export class TodoItemComponent {
	taskTitle = '';
	isCompleted = false;
	formIsInvalid = true;

	completeTask() {
		this.isCompleted = true;
	}
	updateTitle(title: string) {
		this.taskTitle = title;
	}
}
