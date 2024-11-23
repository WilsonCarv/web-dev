import { Component } from '@angular/core';
import { DeferComponent } from './sandbox/components/defer/defer.component';
import { ResourceComponent } from './sandbox/components/resource/resource.component';

@Component({
	selector: 'app-root',
	imports: [DeferComponent, ResourceComponent],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {}
