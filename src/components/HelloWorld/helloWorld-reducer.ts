import { fromJS } from 'immutable';
import { HELLO_WORLD_CHANGE_GREETING, HELLO_WORLD_CHANGE_SUBJECT } from './helloWorld-actions';

const initialState = fromJS({
  greeting: 'Hello',
  subject: 'World',
});

export const helloWorldReducer = (state = initialState, action: IAction) => {
  switch(action.type) {
    case HELLO_WORLD_CHANGE_GREETING: {
      return state.set('greeting', action.payload);
    }

    case HELLO_WORLD_CHANGE_SUBJECT: {
      return state.set('subject', action.payload);
    }

    default: {
      return state;
    }
  }
};
