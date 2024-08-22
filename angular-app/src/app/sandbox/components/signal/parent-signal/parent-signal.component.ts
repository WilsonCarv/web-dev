import { Component, signal } from '@angular/core';
import { SignalComponent } from '../signal.component';

@Component({
	selector: 'app-parent-signal',
	standalone: true,
	imports: [SignalComponent],
	templateUrl: './parent-signal.component.html',
	styleUrl: './parent-signal.component.scss'
})
export class ParentSignalComponent {
	firstName = signal<string>('Wilson');
	age = signal<number>(30);
	lastName = signal<string>('Carvajal');
}
