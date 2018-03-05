import { all } from 'redux-saga/effects';
import helloWorldSaga from '../components/AsyncCounter/asyncCounter-sagas';
import weatherForecastSaga from '../components/WeatherForecast/weatherForecast-sagas';

export default function* rootSaga(): any {
  yield all([
    helloWorldSaga(),
    weatherForecastSaga(),
  ]);
}
