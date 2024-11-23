import { Component, OnInit } from '@angular/core';

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
export class DeferComponent implements OnInit {
	deferCondition = false;
	ngOnInit(): void {
		setTimeout(() => {
			this.deferCondition = true;
		}, 10000);
	}
}
