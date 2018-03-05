import * as React from 'react'
import * as ReactDOM from 'react-dom';
import { HelloWorld, TodoList, AsyncCounter, WeatherForecast } from './components';

import { Provider } from 'react-redux';
import { store } from './state/store';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <h2>Hello World</h2>
      <HelloWorld />

      <h2>Todo List</h2>
      <TodoList />

      <h2>Async Counter</h2>
      <AsyncCounter />

      <h2>Weather Forecast</h2>
      <WeatherForecast />
    </div>
  </Provider>,

  document.getElementById('app'),
);
