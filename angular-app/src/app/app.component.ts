import { Component } from '@angular/core';
import { DeferComponent } from './sandbox/components/defer/defer.component';

@Component({
	selector: 'app-root',
	imports: [DeferComponent],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {}
