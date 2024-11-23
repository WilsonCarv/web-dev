import { Component } from '@angular/core';
import { ResourceComponent } from './sandbox/components/resource/resource.component';
import { DeferComponent } from './sandbox/components/defer/defer.component';

@Component({
	selector: 'app-root',
	imports: [ResourceComponent, DeferComponent],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {}
