import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-template',
	standalone: true,
	imports: [NgIf, NgTemplateOutlet],
	templateUrl: './template.component.html',
	styleUrl: './template.component.scss'
})
export class TemplateComponent {
	showAdminTemplate = false;

	constructor(private activateRoute: ActivatedRoute) {
		this.activateRoute.queryParams.subscribe(params => {
			this.showAdminTemplate = params['showAdminTemplate'];
		});
	}
}
