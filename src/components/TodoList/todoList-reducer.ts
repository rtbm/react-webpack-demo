import { fromJS } from 'immutable';
import { TODO_LIST_ADD_TODO, TODO_LIST_TOGGLE_TODO } from './todoList-actions';

const initialState = fromJS({
  todos: [],
});

export const todoListReducer = (state = initialState, action: IAction) => {
  switch(action.type) {
    case TODO_LIST_ADD_TODO: {
      return state.update('todos', (list: any[]) => list.push(action.payload));
    }

    case TODO_LIST_TOGGLE_TODO: {
      return state.update('todos', (list: any[]) => list.map((n: any, i) => i !== action.payload
        ? n
        : {...n, ...{done: !n.done}}));
    }

    default: {
      return state;
    }
  }
};
