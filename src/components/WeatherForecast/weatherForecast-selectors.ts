import { createSelector } from 'reselect';

export const getWeatherForecast = () => (state: any) => state.get('weatherForecast');

export const selectWeatherForecastCity = () => createSelector(
  getWeatherForecast(),
  weatherForecastState => weatherForecastState.get('city'),
);

export const selectWeatherForecastTemp = () => createSelector(
  getWeatherForecast(),
  weatherForecastState => weatherForecastState.get('temp'),
);

export const selectWeatherForecastWind = () => createSelector(
  getWeatherForecast(),
  weatherForecastState => weatherForecastState.get('wind'),
);

export const selectWeatherForecastIsPending = () => createSelector(
  getWeatherForecast(),
  weatherForecastState => weatherForecastState.get('isPending'),
);

export const selectWeatherForecastIsSuccess = () => createSelector(
  getWeatherForecast(),
  weatherForecastState => weatherForecastState.get('isSuccess'),
);

export const selectWeatherForecastIsError = () => createSelector(
  getWeatherForecast(),
  weatherForecastState => weatherForecastState.get('isError'),
);
