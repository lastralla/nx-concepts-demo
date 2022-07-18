import { createReducer, on } from '@ngrx/store';
import { Todo } from './models';
import { addItem, addMultiple, decrement, increment, removeItem, removeMultiple, reset, toggleDone, toggleUrgent } from './store.actions';

export interface AppState {
  count: number;
  todos: Todo[];
}

export const initialCouterState = 1;

export const initialTodoState: Todo[] = [
  {
    id: '1',
    title: 'Code Angular',
    description: 'do some Angular',
    isDone: false,
    isUrgent: false
  },
  {
    id: '2',
    title: 'Code React',
    isDone: false,
    isUrgent: false
  },
  {
    id: '3',
    title: 'Code Angular',
    description: 'do some Angular',
    isDone: true,
    isUrgent: true
  },
  {
    id: '4',
    title: 'Code React',
    isDone: false,
    isUrgent: true
  }
];

export const counterReducer = createReducer(
  initialCouterState,
  on(increment, (state) => {
    return state + 1;
  }),

  on(decrement, (state) => {
    return state - 1;
  }),

  on(reset, (_) => {
    return initialCouterState;
  }),

  on(addMultiple, (state, action) => {
    return state + action.amount;
  }),

  on(removeMultiple, (state, action) => {
    return state - action.amount;
  }),
);

export const todoReducer = createReducer(
  initialTodoState,
  on(addItem, (state, action) => {
    return [
      ...state,
      action.todo
    ];
  }),

  on(removeItem, (state, action) => {
    return state.filter((todo: Todo) => {
      return todo.id !== action.todo.id;
    });
  }),

  on(toggleDone, (state, action) => {
    const newState = state.map((todo: Todo) => {
      const newTodo = { ...todo };

      if (todo.id === action.todo.id) {
        newTodo.isDone = !newTodo.isDone;
      }

      return newTodo;
    });

    return newState;
  }),

  on(toggleUrgent, (state, action) => {
    const newState = state.map((todo: Todo) => {
      if (todo.id === action.todo.id) {
        const newTodo = { ...todo };
        newTodo.isUrgent = !newTodo.isUrgent

        return newTodo;
      }

      return todo;
    });

    return newState;
  })
);
