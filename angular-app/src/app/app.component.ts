import { Component } from '@angular/core';
import { ParentQueryComponent } from './sandbox/components/queries/parent-query/parent-query.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [ParentQueryComponent],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {}
