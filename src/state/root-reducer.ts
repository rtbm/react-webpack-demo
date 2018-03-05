import { combineReducers } from 'redux-immutable';
import { helloWorldReducer } from '../components/HelloWorld/helloWorld-reducer';
import { todoListReducer } from '../components/TodoList/todoList-reducer';
import { asyncCounterReducer } from '../components/AsyncCounter/asyncCounter-reducer';
import { weatherForecastReducer } from '../components/WeatherForecast/weatherForecast-reducer';

export interface State {
  helloWorld: any;
  todoList: any;
  asyncCounter: number;
  weatherForecast: any;
}

export const state = combineReducers({
  helloWorld: helloWorldReducer,
  todoList: todoListReducer,
  asyncCounter: asyncCounterReducer,
  weatherForecast: weatherForecastReducer,
});
