import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentQueryComponent } from './parent-query.component';

describe('ParentQueryComponent', () => {
	let component: ParentQueryComponent;
	let fixture: ComponentFixture<ParentQueryComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ParentQueryComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(ParentQueryComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
