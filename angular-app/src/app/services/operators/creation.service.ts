import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map, catchError, of } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class CreationService {
	constructor() {}

	useAjax() {
		return ajax('https://api.github.com/users?_page=5').pipe(
			map(userResponse => userResponse.response),
			catchError(error => {
				console.log('error: ', error);
				return of(error);
			})
		);
	}
}
