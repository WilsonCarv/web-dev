import {
	Component,
	ElementRef,
	ViewChild,
	AfterViewInit,
	ViewChildren,
	QueryList,
	ContentChild,
	AfterContentInit,
	ContentChildren
} from '@angular/core';
import { DeepChildQueryComponent } from '../deep-child-query/deep-child-query.component';

@Component({
	selector: 'app-child-query',
	standalone: true,
	imports: [],
	templateUrl: './child-query.component.html',
	styleUrl: './child-query.component.scss'
})
export class ChildQueryComponent implements AfterViewInit, AfterContentInit {
	@ViewChild('textRef') inputTextRef?: ElementRef<HTMLInputElement>;
	@ViewChildren('divRef') divRef?: QueryList<ElementRef<HTMLDivElement>>;
	@ContentChild(DeepChildQueryComponent) deepChildQuery?: DeepChildQueryComponent;
	@ContentChildren(DeepChildQueryComponent) deepChildQueryList?: QueryList<DeepChildQueryComponent>;
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
}
