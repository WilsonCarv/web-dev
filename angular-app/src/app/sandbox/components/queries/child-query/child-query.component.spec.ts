import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildQueryComponent } from './child-query.component';

describe('ChildQueryComponent', () => {
	let component: ChildQueryComponent;
	let fixture: ComponentFixture<ChildQueryComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ChildQueryComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(ChildQueryComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
