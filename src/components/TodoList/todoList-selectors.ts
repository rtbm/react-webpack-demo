import { createSelector } from 'reselect';

const getTodoList = () => (state: any) => state.get('todoList');

export const selectTodoListTodos = () => createSelector(
  getTodoList(),
  todoListState => todoListState.get('todos'),
);
