import { combineReducers } from 'redux-immutable';
import { helloWorldReducer } from '../HelloWorld/helloWorld-reducer';

export interface State {
  helloWorldReducer: any;
}

export const state = combineReducers({
  helloWorld: helloWorldReducer,
});
