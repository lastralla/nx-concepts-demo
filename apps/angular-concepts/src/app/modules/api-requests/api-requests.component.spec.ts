import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRequestsComponent } from './api-requests.component';

describe('ApiRequestsComponent', () => {
  let component: ApiRequestsComponent;
  let fixture: ComponentFixture<ApiRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiRequestsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
