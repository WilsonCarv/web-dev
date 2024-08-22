import {
	Component,
	ElementRef,
	ViewChild,
	AfterViewInit,
	ViewChildren,
	QueryList,
	ContentChild,
	AfterContentInit,
	ContentChildren,
	Input,
	OnInit,
	OnChanges,
	SimpleChanges,
	AfterContentChecked,
	AfterViewChecked,
	OnDestroy,
	Output,
	EventEmitter
} from '@angular/core';
import { DeepChildQueryComponent } from '../deep-child-query/deep-child-query.component';

@Component({
	selector: 'app-child-query',
	standalone: true,
	imports: [],
	templateUrl: './child-query.component.html',
	styleUrl: './child-query.component.scss'
})
export class ChildQueryComponent
	implements
		AfterViewInit,
		AfterContentInit,
		OnInit,
		OnChanges,
		AfterContentChecked,
		AfterViewChecked,
		OnDestroy
{
	@Input('age') age: number | undefined;
	@Output('ageChange') ageChange = new EventEmitter<number>();
	@ViewChild('textRef') inputTextRef?: ElementRef<HTMLInputElement>;
	@ViewChildren('divRef') divRef?: QueryList<ElementRef<HTMLDivElement>>;
	@ContentChild(DeepChildQueryComponent) deepChildQuery?: DeepChildQueryComponent;
	@ContentChildren(DeepChildQueryComponent) deepChildQueryList?: QueryList<DeepChildQueryComponent>;
	ngOnInit(): void {
		console.log('Ng onInit', this.age);
	}
	ngOnChanges(changes: SimpleChanges): void {
		console.log('Ng onChanges', changes);
	}
	ngDoCheck() {
		console.log('Ng doCheck');
	}

	ngAfterViewInit(): void {
		this.inputTextRef?.nativeElement.focus();

		this.divRef?.forEach(element => {
			element.nativeElement.style.backgroundColor = 'red';
		});
	}
	ngAfterContentInit(): void {
		console.log(this.deepChildQuery?.name);
		this.deepChildQueryList?.forEach(element => {
			console.log(element.name);
		});
	}
	ngAfterContentChecked(): void {
		console.log('Ng afterContentChecked');
	}
	ngAfterViewChecked(): void {
		console.log('Ng afterViewChecked');
	}
	ngOnDestroy(): void {
		console.log('Ng onDestroy');
	}
	changeAgeFromChild() {
		this.ageChange.emit(Math.random() * 1000);
	}
}
