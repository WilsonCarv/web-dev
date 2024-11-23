import { Injectable, resource, signal } from '@angular/core';
import { User } from '../../components/resource/model';
import { API_URL } from '../../components/resource/config';

@Injectable({
	providedIn: 'root'
})
export class ResourceService {
	constructor() {}

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
}
