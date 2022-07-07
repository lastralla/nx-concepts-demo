export interface Todo {
  id: string;
  title: string;
  isDone: boolean;
  isUrgent: boolean;
  description?: string;
}

export const defaultTodoIsDone = false;

export const defaultTodoIsUrgent = false;
