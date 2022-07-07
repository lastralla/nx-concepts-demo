import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../store/store.reducer';
import * as actions from '../../store/store.actions';

@Component({
  templateUrl: './ngrx-counter.component.html',
  styleUrls: ['./ngrx-counter.component.scss']
})
export class NgrxCounterComponent implements OnInit {

  @ViewChild('incNum') incNum: ElementRef<HTMLInputElement>;

  counter$: Observable<number>;

  todosCount$: Observable<number>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // Example selecting straight from store

    this.counter$ = this.store.select((state: AppState) => {
      return state.count;
    });

    this.todosCount$ = this.store.select((state: AppState) => {
      return state.todos.filter(todo => {
        return !todo.isDone;
      }).length;
    });
  }

  increment(): void {
    this.store.dispatch(actions.increment());
  }

  decrement(): void {
    this.store.dispatch(actions.decrement());
  }

  addMultiple(): void {
    this.store.dispatch(actions.addMultiple(parseInt(this.incNum.nativeElement.value)));
  }

  removeMultiple(): void {
    this.store.dispatch(actions.removeMultiple(parseInt(this.incNum.nativeElement.value)));
  }

  reset(): void {
    this.store.dispatch(actions.reset());
  }
}
