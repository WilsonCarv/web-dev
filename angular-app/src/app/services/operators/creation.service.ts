import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import {
	map,
	catchError,
	of,
	defer,
	fromEvent,
	interval,
	from,
	range,
	timer,
	combineLatest,
	take,
	concat,
	forkJoin,
	merge,
	concatMap,
	mergeMap
} from 'rxjs';
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
	useDefer() {
		return defer(() => {
			return Math.random() > 0.3 ? fromEvent(document, 'click') : interval(1000);
		});
	}
	useFrom() {
		return from([{ name: 'Brian' }, { name: 'Joe' }]);
	}
	useRange() {
		return range(1, 20);
	}
	combineLatest() {
		const firstTimer = timer(0, 1000);
		const secondTimer = timer(500, 1000);
		return combineLatest([firstTimer, secondTimer]);
	}
	concat() {
		const timer = interval(1000).pipe(take(4));
		const sequence = range(1, 10);
		return concat(timer, sequence);
	}
	forkJoin() {
		const request1 = ajax('https://api.github.com/users?since=1').pipe(
			map(response => response.response)
		);
		const request2 = ajax('https://api.github.com/users?since=2').pipe(
			map(response => response.response)
		);
		const request3 = ajax('https://api.github.com/users?since=3').pipe(
			map(response => response.response)
		);
		return forkJoin([request1, request2, request3]);
	}
	merge() {
		const clicks = fromEvent(document, 'click');
		const timer = interval(1000);
		return merge(clicks, timer);
	}
	concatMap() {
		const clicks = fromEvent(document, 'click');
		return clicks.pipe(concatMap(ev => interval(1000).pipe(take(4))));
	}
	mergeMap() {
		const letters = of('a', 'b', 'c');
		return letters.pipe(mergeMap(x => interval(1000).pipe(map(i => x + i))));
	}
}
