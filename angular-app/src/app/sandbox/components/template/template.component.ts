import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-template',
	imports: [NgTemplateOutlet],
	templateUrl: './template.component.html',
	styleUrl: './template.component.scss'
})
export class TemplateComponent {
	private activateRoute = inject(ActivatedRoute);

	showAdminTemplate = false;

	constructor() {
		this.activateRoute.queryParams.subscribe(params => {
			this.showAdminTemplate = params['showAdminTemplate'] === 'true';
		});
	}
}
