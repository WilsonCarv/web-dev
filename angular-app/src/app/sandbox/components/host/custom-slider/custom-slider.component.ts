import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
	selector: 'app-custom-slider',
	imports: [],
	templateUrl: './custom-slider.component.html',
	styleUrl: './custom-slider.component.scss',
	host: {
		'[class]': 'className'
	}
})
export class CustomSliderComponent {
	className = 'custom-slider';
	@HostBinding('attr.aria-value')
	value: number = 0;

	@HostListener('click', ['$event'])
	onClick(event: MouseEvent) {
		console.log('click event from host listener: ', event);
	}
}
