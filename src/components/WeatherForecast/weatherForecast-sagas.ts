import { read } from '../../services/RestClient';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
  WEATHER_FORECAST_FETCH_WEATHER_PENDING, WEATHER_FORECAST_FETCH_WEATHER_SUCCESS,
  WEATHER_FORECAST_FETCH_WEATHER_ERROR, WEATHER_FORECAST_FETCH_WEATHER
} from './weatherForecast-actions';

const londonWeatherUrl = '/data/2.5/weather?id=2172797&appid=b6907d289e10d714a6e88b30761fae22';

export function* fetchWeather() {
  yield put({
    type: WEATHER_FORECAST_FETCH_WEATHER_PENDING,
  });

  const { err, response } = yield call(read, londonWeatherUrl);

  if (err) {
    yield put({
      type: WEATHER_FORECAST_FETCH_WEATHER_ERROR,
      payload: err,
    });

  } else {
    yield put({
      type: WEATHER_FORECAST_FETCH_WEATHER_SUCCESS,
      payload: response.data,
    });
  }
}

export function* watchFetchWeather() {
  yield takeEvery(WEATHER_FORECAST_FETCH_WEATHER, fetchWeather);
}

export default function* helloWorldSaga(): any {
  yield all([
    watchFetchWeather(),
  ]);
}
