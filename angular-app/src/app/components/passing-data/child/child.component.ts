import { NgIf } from '@angular/common';
import {
	Component,
	DoCheck,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output,
	SimpleChanges
} from '@angular/core';

@Component({
	selector: 'app-child',
	standalone: true,
	imports: [NgIf],
	templateUrl: './child.component.html',
	styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {
	@Input({ required: true, alias: 'productName' }) productName: string | undefined;
	@Output() productClicked = new EventEmitter<string>();
	brandName = 'Apple';
	ngOnInit(): void {
		console.log('Ng onInit', this.productName);
	}
	ngOnChanges(changes: SimpleChanges): void {
		console.log('Ng onChanges', changes);
	}
	ngDoCheck() {
		console.log('Ng doCheck');
	}
}
