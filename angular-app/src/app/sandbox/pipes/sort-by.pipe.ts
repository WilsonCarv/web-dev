import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'sortBy',
	standalone: true
})
export class SortByPipe implements PipeTransform {
	transform<T>(value: T[]): T[] {
		if (!Array.isArray(value)) {
			return value;
		}
		value.sort((a: any, b: any) => {
			if (a < b) {
				return -1;
			}
			if (a > b) {
				return 1;
			}
			return 0;
		});
		return value;
	}
}
