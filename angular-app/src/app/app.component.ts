import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ConditionalComponent } from './components/conditional/conditional.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, TodoListComponent, ConditionalComponent],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'angular-app';
}
