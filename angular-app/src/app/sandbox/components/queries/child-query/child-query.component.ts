import {
  Component,
  ElementRef,
  AfterViewInit,
  AfterContentInit,
  OnInit,
  OnChanges,
  SimpleChanges,
  AfterContentChecked,
  AfterViewChecked,
  OnDestroy,
  input,
  viewChild,
  viewChildren,
  contentChild,
  contentChildren,
  output
} from '@angular/core';
import { DeepChildQueryComponent } from '../deep-child-query/deep-child-query.component';

@Component({
    selector: 'app-child-query',
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
	readonly age = input<number>();
	ageChange = output<number>();
	readonly inputTextRef = viewChild<ElementRef<HTMLInputElement>>('textRef');
	readonly divRef = viewChildren<ElementRef<HTMLDivElement>>('divRef');
	readonly deepChildQuery = contentChild(DeepChildQueryComponent);
	readonly deepChildQueryList = contentChildren(DeepChildQueryComponent);
	ngOnInit(): void {
		console.log('Ng onInit', this.age());
	}
	ngOnChanges(changes: SimpleChanges): void {
		console.log('Ng onChanges', changes);
	}
	ngDoCheck() {
		console.log('Ng doCheck');
	}

	ngAfterViewInit(): void {
		this.inputTextRef()?.nativeElement.focus();

		this.divRef()?.forEach(element => {
			element.nativeElement.style.backgroundColor = 'red';
		});
	}
	ngAfterContentInit(): void {
		console.log(this.deepChildQuery()?.name);
		this.deepChildQueryList()?.forEach(element => {
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
