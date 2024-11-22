
import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
  input,
  output
} from '@angular/core';

@Component({
    selector: 'app-child',
    imports: [],
    templateUrl: './child.component.html',
    styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {
	readonly productName = input.required<string | undefined>();
	productClicked = output<string>();
	readonly counter = input<number>(0);
	counterChange = output<number>();
	brandName = 'Apple';
	ngOnInit(): void {
		console.log('Ng onInit', this.productName());
	}
	ngOnChanges(changes: SimpleChanges): void {
		console.log('Ng onChanges', changes);
	}
	ngDoCheck() {
		console.log('Ng doCheck');
	}
}
