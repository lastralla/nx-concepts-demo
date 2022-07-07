import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../store/models';
import { AppState } from '../../store/store.reducer';
import { selectCount, selectTodo } from '../../store/store.selectors';
import * as actions from '../../store/store.actions';
import { NgForm } from '@angular/forms';
import { v4 as uuid } from 'uuid';

@Component({
  templateUrl: './ngrx-todo.component.html',
  styleUrls: ['./ngrx-todo.component.scss']
})
export class NgrxTodoComponent {

  counter$: Observable<number> = this.store.select(selectCount);

  todos$: Observable<Todo[]> = this.store.select(selectTodo);

  constructor(private store: Store<AppState>) {}

  model = {
    title: '',
    description: '',
    urgent: false,
  };

  toggleDone(todo: Todo) {
    this.store.dispatch(actions.toggleDone(todo))
  };

  toggleTodoUrgent(event: MouseEvent, todo: Todo) {
    event.stopPropagation();

    this.store.dispatch(actions.toggleUrgent(todo));
  }

  removeTodo(event: MouseEvent, todo: Todo) {
    event.stopPropagation();

    this.store.dispatch(actions.removeItem(todo));
  }

  addTodo(form: NgForm) {
    if (form.valid) {
      // console.log(form, form.value, form.controls);
      this.store.dispatch(actions.addItem({
        id: uuid(),
        title: form.value.title,
        description: form.value.description,
        isUrgent: form.value.urgent,
        isDone: false,
      }));

      form.reset();
    }
  };

  trackByFn(index: number, todo: Todo) {
    return todo.id;
  }
}
