import { createAction } from '@ngrx/store';
import { Todo } from './models';

export const increment = createAction('[Counter] Increment');

export const decrement = createAction('[Counter] Decrement');

export const reset = createAction('[Counter] Reset');

export const addMultiple = createAction(
  '[Counter] Add Multiple',
  (amount: number) => ({amount})
);

export const removeMultiple = createAction(
  '[Counter] Decrement Multiple',
  (amount: number) => ({amount})
);

export const addItem = createAction(
  '[Todo Component] Add',
  (todo: Todo) => ({todo})
);

export const removeItem = createAction(
  '[Todo Component] Remove',
  (todo: Todo) => ({todo})
);

export const toggleDone = createAction(
  '[Todo Component] Toggle Done',
  (todo: Todo) => ({todo})
);

export const toggleUrgent = createAction(
  '[Todo Component] Toggle Urgent',
  (todo: Todo) => ({todo})
);
