import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MockModule } from 'ng-mocks';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { NgrxTodoComponent } from './ngrx-todo.component';

describe('NgrxTodoComponent', () => {
  let component: NgrxTodoComponent;
  let fixture: ComponentFixture<NgrxTodoComponent>;
  // let store: MockStore;

  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxTodoComponent ],
      imports: [
        MockModule(FormsModule),
      ],
      providers: [
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();

    // store = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(NgrxTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
