import { fromJS } from 'immutable';
import {
  WEATHER_FORECAST_FETCH_WEATHER_ERROR,
  WEATHER_FORECAST_FETCH_WEATHER_PENDING, WEATHER_FORECAST_FETCH_WEATHER_SUCCESS
} from './weatherForecast-actions';

const initialState = fromJS({
  city: undefined,
  temp: undefined,
  wind: undefined,
  isPending: false,
  isSuccess: false,
  isError: false,
});

export const weatherForecastReducer = (state = initialState, action: IAction) => {
  switch(action.type) {
    case WEATHER_FORECAST_FETCH_WEATHER_PENDING: {
      return state
        .set('city', undefined)
        .set('temp', undefined)
        .set('wind', undefined)
        .set('isPending', true)
        .set('isError', false)
        .set('isSuccess', false);
    }

    case WEATHER_FORECAST_FETCH_WEATHER_SUCCESS: {
      return state
        .set('city', action.payload.name)
        .set('temp', action.payload.main.temp)
        .set('wind', action.payload.wind.speed)
        .set('isSuccess', true)
        .set('isPending', false);
    }

    case WEATHER_FORECAST_FETCH_WEATHER_ERROR: {
      return state
        .set('isError', true)
        .set('isPending', false);
    }

    default: {
      return state;
    }
  }
};
