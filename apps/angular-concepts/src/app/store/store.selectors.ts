import { Todo } from './models';
import { AppState } from './store.reducer';

export const selectCount = (state: AppState): number => state.count;

export const selectTodo = (state: AppState): Todo[] => state.todos;

export const selectTodosCount = (state: AppState): number => {
  return state.todos.filter(todo => {
    return !todo.isDone
  }).length;
};
