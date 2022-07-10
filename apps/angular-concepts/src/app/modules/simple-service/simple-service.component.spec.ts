import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleServiceComponent } from './simple-service.component';

describe('SimpleServiceComponent', () => {
  let component: SimpleServiceComponent;
  let fixture: ComponentFixture<SimpleServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleServiceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
