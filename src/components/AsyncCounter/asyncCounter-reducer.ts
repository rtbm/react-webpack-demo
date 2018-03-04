import { ASYNC_COUNTER_DECREMENT, ASYNC_COUNTER_INCREMENT } from './asyncCounter-actions';

const initialState = 0;

export const asyncCounterReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ASYNC_COUNTER_INCREMENT: {
      return state + 1;
    }

    case ASYNC_COUNTER_DECREMENT: {
      return state - 1;
    }

    default: {
      return state;
    }
  }
}
