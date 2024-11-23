import { Component } from '@angular/core';
import { ParentSignalComponent } from './sandbox/components/signal/parent-signal/parent-signal.component';
import { DeferComponent } from './sandbox/components/defer/defer.component';

@Component({
	selector: 'app-root',
	imports: [ParentSignalComponent, DeferComponent],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {}
