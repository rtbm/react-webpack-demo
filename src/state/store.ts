import { createStore, Store, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { State, state } from './root-reducer';
import initialState from './root-state';
import rootSaga from './root-saga';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware));

export const store: Store<State> = createStore(
  state,
  initialState!,
  enhancers,
);

sagaMiddleware.run(rootSaga);
