import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ResourceService } from '../../services/resource/resource.service';
@Component({
	selector: 'app-resource',
	imports: [MatProgressBarModule],
	template: `
		<fieldset>
			<legend>Users Search</legend>
			<input
				(input)="this.resourceService.query.set($any($event.target).value)"
				type="search"
				placeholder="Search..."
			/>
		</fieldset>
		@if (this.resourceService.users.isLoading()) {
			<mat-progress-bar mode="query" />
		}
		@if (this.resourceService.users.error()) {
			<div class="error">{{ this.resourceService.users.error() }}</div>
		}
		<section class="actions">
			<button (click)="this.resourceService.users.reload()">Reload</button>
			<button (click)="addUser()">Add User</button>
			<button (click)="this.resourceService.users.set([])">Clear</button>
			<button (click)="this.resourceService.limit.set(this.resourceService.limit() + 50)">
				Load more
			</button>
		</section>
		<ul>
			@for (user of this.resourceService.users.value(); track user.id) {
				<li>{{ user.name }}</li>
			} @empty {
				<li class="no-data">Nothing to show</li>
			}
		</ul>
	`
})
export class ResourceComponent {
	constructor(readonly resourceService: ResourceService) {}
	addUser() {
		const user = { id: 123, name: 'Wilson' };
		this.resourceService.users.update(users => (users ? [user, ...users] : [user]));
	}
}
