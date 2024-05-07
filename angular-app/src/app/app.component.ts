import {
	AfterContentInit,
	AfterViewInit,
	Component,
	ElementRef,
	OnDestroy,
	OnInit,
	ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ConditionalComponent } from './components/conditional/conditional.component';
import { LoopsComponent } from './components/loops/loops.component';
import { CreationService } from './services/operators/creation.service';
import { Subject, takeUntil } from 'rxjs';
import { ContainerComponent } from './components/custom-card/container/container.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		CommonModule,
		RouterOutlet,
		TodoListComponent,
		ConditionalComponent,
		LoopsComponent,
		ContainerComponent
	],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
	@ViewChild('componentRef', { static: true }) divRef!: ElementRef;
	title = 'angular-app';
	private readonly unSubscribeAll = new Subject();
	showDiv = true;
	constructor(private readonly creationService: CreationService) {}
	ngAfterViewInit(): void {
		this.divRef.nativeElement.innerHTML = 'Hello World';
	}
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
