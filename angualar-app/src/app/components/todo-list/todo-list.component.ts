import { Component } from '@angular/core';
import { TodoItemComponent } from '../todo/todo-item.component';

@Component({
	selector: 'app-todo-list',
	standalone: true,
	imports: [TodoItemComponent],
	template: `
		<ul>
			<app-todo-item></app-todo-item>
		</ul>
	`
})
export class TodoListComponent {}
