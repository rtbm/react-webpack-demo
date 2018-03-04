import { createSelector } from 'reselect';

const getAsyncCounter = () => (state: any) => state.get('asyncCounter');

export const selectAsyncCounterValue = () => createSelector(
  getAsyncCounter(),
  asyncCounterState => asyncCounterState,
);
