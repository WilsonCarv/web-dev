import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'app-template',
	standalone: true,
	imports: [NgIf, NgTemplateOutlet],
	templateUrl: './template.component.html',
	styleUrl: './template.component.scss'
})
export class TemplateComponent {
	showAdminTemplate = false;
}
