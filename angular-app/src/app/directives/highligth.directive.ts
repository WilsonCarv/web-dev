import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[appHighlight]',
	standalone: true
})
export class HighlightDirective {
	@Input({ required: true }) color: string = '';
	constructor(private element: ElementRef) {}

	@HostListener('mouseenter') onMouseEnter() {
		this.element.nativeElement.style.backgroundColor = this.color || 'yellow';
	}
	@HostListener('mouseleave') onMouseLeave() {
		this.element.nativeElement.style.backgroundColor = '';
	}
}
