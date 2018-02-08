import { fromJS } from 'immutable';
import {
  HELLO_WORLD_ADD_TODO, HELLO_WORLD_CHANGE_GREETING, HELLO_WORLD_CHANGE_SUBJECT,
  HELLO_WORLD_TOGGLE_TODO
} from './helloWorld-actions';
import { IAction } from '../state/IAction';

const initialState = fromJS({
  greeting: 'Hello',
  subject: 'World',
  todos: [],
});

export const helloWorldReducer = (state = initialState, action: IAction) => {
  switch(action.type) {
    case HELLO_WORLD_CHANGE_GREETING: {
      return state.set('greeting', action.payload);
    }

    case HELLO_WORLD_CHANGE_SUBJECT: {
      return state.set('subject', action.payload);
    }

    case HELLO_WORLD_ADD_TODO: {
      return state.update('todos', (list: any[]) => list.push(action.payload));
    }

    case HELLO_WORLD_TOGGLE_TODO: {
      return state.update('todos', (list: any[]) => list.map((n: any, i) => i !== action.payload
        ? n
        : {...n, ...{ done: !n.done }}));
    }

    default: {
      return state;
    }
  }
};
