import { Component, resource, signal, ResourceStatus } from '@angular/core';
import { API_URL } from './config';
import { User } from './model';
import { MatProgressBarModule } from '@angular/material/progress-bar';
@Component({
	selector: 'app-resource',
	imports: [MatProgressBarModule],
	template: `
		<fieldset>
			<legend>Users Search</legend>
			<input (input)="query.set($any($event.target).value)" type="search" placeholder="Search..." />
		</fieldset>
		@if (users.isLoading()) {
			<mat-progress-bar mode="query" />
		}
		@if (users.error()) {
			<div class="error">{{ users.error() }}</div>
		}
		<section class="actions">
			<button (click)="users.reload()">Reload</button>
			<button (click)="addUser()">Add User</button>
			<button (click)="users.set([])">Clear</button>
			<button (click)="limit.set(limit() + 50)">Load more</button>
		</section>
		<ul>
			@for (user of users.value(); track user.id) {
				<li>{{ user.name }}</li>
			} @empty {
				<li class="no-data">Nothing to show</li>
			}
		</ul>
	`
})
export class ResourceComponent {
	query = signal('');
	limit = signal(50);
	users = resource<User[], { query: string; limit: number }>({
		request: () => ({ query: this.query(), limit: this.limit() }),
		loader: async ({ request, abortSignal }) => {
			const users = await fetch(`${API_URL}?name_like=^${request.query}&limit=${request.limit}`, {
				signal: abortSignal
			});
			if (!users.ok) throw Error(`Could not fetch...`);
			return await users.json();
		}
	});
	constructor() {}
	addUser() {
		const user = { id: 123, name: 'Wilson' };
		this.users.update(users => (users ? [user, ...users] : [user]));
	}
}
