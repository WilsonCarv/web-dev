import { Component } from '@angular/core';
import { SignalComponent } from './sandbox/components/signal/signal.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [SignalComponent],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {}
