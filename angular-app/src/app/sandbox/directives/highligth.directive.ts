import { Directive, ElementRef, HostListener, input, inject } from '@angular/core';

@Directive({
	selector: '[appHighlight]',
	standalone: true
})
export class HighlightDirective {
	private element = inject(ElementRef);

	readonly color = input.required<string>();

	@HostListener('mouseenter') onMouseEnter() {
		this.element.nativeElement.style.backgroundColor = this.color() || 'yellow';
	}
	@HostListener('mouseleave') onMouseLeave() {
		this.element.nativeElement.style.backgroundColor = '';
	}
}
