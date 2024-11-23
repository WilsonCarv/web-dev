import { Component } from '@angular/core';
import { ResourceComponent } from './sandbox/components/resource/resource.component';

@Component({
	selector: 'app-root',
	imports: [ResourceComponent],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {}
