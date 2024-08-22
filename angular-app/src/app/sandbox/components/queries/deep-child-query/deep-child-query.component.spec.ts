import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepChildQueryComponent } from './deep-child-query.component';

describe('DeepChildQueryComponent', () => {
	let component: DeepChildQueryComponent;
	let fixture: ComponentFixture<DeepChildQueryComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [DeepChildQueryComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(DeepChildQueryComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
