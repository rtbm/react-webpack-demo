import { createStore, Store } from 'redux';
import { State, state } from './root-reducer';
import initialState from './root-state';

export const store: Store<State> = createStore(
  state,
  initialState!,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);
