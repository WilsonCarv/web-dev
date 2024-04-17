import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ConditionalComponent } from './components/conditional/conditional.component';
import { LoopsComponent } from './components/loops/loops.component';
import { CreationService } from './services/operators/creation.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, TodoListComponent, ConditionalComponent, LoopsComponent],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
	title = 'angular-app';
	private readonly unSubscribeAll = new Subject();
	constructor(private readonly creationService: CreationService) {}
	ngOnDestroy(): void {
		this.unSubscribeAll.next(null);
		this.unSubscribeAll.unsubscribe();
	}
	ngOnInit(): void {
		this.subscribeToAjax();
	}
	subscribeToAjax() {
		this.creationService
			.useAjax()
			.pipe(takeUntil(this.unSubscribeAll))
			.subscribe(response => console.log('response: ', response));
	}
}
