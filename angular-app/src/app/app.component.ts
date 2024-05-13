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
import { ParentComponent } from './components/passing-data/parent/parent.component';
import { CustomSliderComponent } from './components/host/custom-slider/custom-slider.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		CommonModule,
		RouterOutlet,
		TodoListComponent,
		ConditionalComponent,
		LoopsComponent,
		ContainerComponent,
		ParentComponent,
		CustomSliderComponent
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
		//this.subscribeToAjax();
		//this.subscribeToDefer();
		//this.subscribeToFrom();
		//this.subscribeToRange();
		//this.subscribeToCombineLatest();
		//this.subscribeToConcat();
		//this.subscribeToForkJoin();
		//this.subscribeToMerge();
		//this.subscribeToConcatMap();
		//this.subscribeToMergeMap();
		this.subscribeToSwitchMap();
	}
	subscribeToAjax() {
		this.creationService
			.useAjax()
			.pipe(takeUntil(this.unSubscribeAll))
			.subscribe(response => console.log('response: ', response));
	}
	subscribeToDefer() {
		this.creationService
			.useDefer()
			.pipe(takeUntil(this.unSubscribeAll))
			.subscribe(response => console.log('response: ', response));
	}
	subscribeToFrom() {
		this.creationService
			.useFrom()
			.pipe(takeUntil(this.unSubscribeAll))
			.subscribe(response => console.log('response: ', response));
	}
	subscribeToRange() {
		this.creationService
			.useRange()
			.pipe(takeUntil(this.unSubscribeAll))
			.subscribe(response => console.log('response: ', response));
	}
	subscribeToCombineLatest() {
		this.creationService
			.combineLatest()
			.pipe(takeUntil(this.unSubscribeAll))
			.subscribe(response => console.log('response: ', response));
	}
	subscribeToConcat() {
		this.creationService
			.concat()
			.pipe(takeUntil(this.unSubscribeAll))
			.subscribe(response => console.log('response: ', response));
	}
	subscribeToForkJoin() {
		this.creationService
			.forkJoin()
			.pipe(takeUntil(this.unSubscribeAll))
			.subscribe({
				next: response => console.log('response: ', response),
				error: error => console.log('error: ', error),
				complete: () => console.log('complete')
			});
	}
	subscribeToMerge() {
		this.creationService
			.merge()
			.pipe(takeUntil(this.unSubscribeAll))
			.subscribe(response => console.log('response: ', response));
	}
	subscribeToConcatMap() {
		this.creationService
			.concatMap()
			.pipe(takeUntil(this.unSubscribeAll))
			.subscribe(response => console.log('response: ', response));
	}
	subscribeToMergeMap() {
		this.creationService
			.mergeMap()
			.pipe(takeUntil(this.unSubscribeAll))
			.subscribe(response => console.log('response: ', response));
	}
	subscribeToSwitchMap() {
		this.creationService
			.switchMap()
			.pipe(takeUntil(this.unSubscribeAll))
			.subscribe(response => console.log('response: ', response));
	}
}
