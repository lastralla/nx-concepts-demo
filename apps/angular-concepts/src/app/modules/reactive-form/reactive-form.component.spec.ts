import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MockProvider, MockModule } from 'ng-mocks';

import { ReactiveFormComponent } from './reactive-form.component';

describe('ReactiveFormComponent', () => {
  let component: ReactiveFormComponent;
  let fixture: ComponentFixture<ReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormComponent ],
      imports: [
        MockModule(ReactiveFormsModule),
      ],
      providers: [
        MockProvider(FormBuilder)
      ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
