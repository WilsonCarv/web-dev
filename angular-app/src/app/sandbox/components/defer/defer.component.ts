import { Component } from '@angular/core';

@Component({
	selector: 'app-profile',
	template: '<p>app-profile</p>'
})
export class ProfileComponent {}
@Component({
	selector: 'app-defer',
	imports: [ProfileComponent],
	templateUrl: './defer.component.html',
	styleUrl: './defer.component.scss'
})
export class DeferComponent {}
