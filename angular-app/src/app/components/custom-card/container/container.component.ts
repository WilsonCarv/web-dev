import { Component } from '@angular/core';
import { CustomCardComponent } from '../custom-card.component';

@Component({
	selector: 'app-container',
	standalone: true,
	imports: [CustomCardComponent],
	templateUrl: './container.component.html',
	styleUrl: './container.component.scss'
})
export class ContainerComponent {}
