import { createSelector } from 'reselect';

const getHelloWorld = () => (state: any) => state.get('helloWorld');

export const selectHelloWorldGreeting = () => createSelector(
  getHelloWorld(),
  helloWorldState => helloWorldState.get('greeting'),
);

export const selectHelloWorldSubject = () => createSelector(
  getHelloWorld(),
  helloWorldState => helloWorldState.get('subject'),
);
