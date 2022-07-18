import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NgrxCounterComponent } from './ngrx-counter.component';

describe('NgrxCounterComponent', () => {
  let component: NgrxCounterComponent;
  let fixture: ComponentFixture<NgrxCounterComponent>;

  const initialState = {
    count: 1,
    todos: [],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxCounterComponent ],
      providers: [
        provideMockStore({ initialState })
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
