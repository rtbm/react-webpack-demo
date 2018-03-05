import * as React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectWeatherForecastCity, selectWeatherForecastTemp, selectWeatherForecastWind,
selectWeatherForecastIsPending, selectWeatherForecastIsSuccess, selectWeatherForecastIsError,
} from './weatherForecast-selectors';
import { WEATHER_FORECAST_FETCH_WEATHER } from './weatherForecast-actions';
import { connect } from 'react-redux';

interface WeatherForecastProps {
  fetchForecast: () => {};
  city: string;
  temp: number;
  wind: number;
  isError: boolean;
  isSuccess: boolean;
  isPending: boolean;
}

class WeatherForecast extends React.Component<WeatherForecastProps, {}> {
  render() {
    const { fetchForecast, city, temp, wind, isError, isSuccess, isPending } = this.props;

    return (
      <div>
        { isSuccess ? <div>
          <div>
            <span>City:</span>
            <span>{city}</span>
          </div>

          <div>
            <span>Temp:</span>
            <span>{temp}</span>
          </div>

          <div>
            <span>Wind:</span>
            <span>{wind}</span>
          </div>
        </div> : undefined }

        { isPending ? <div>Loading...</div> : undefined }
        { isError ? <div>Error!</div> : undefined }

        <button onClick={fetchForecast}>Fetch forecast</button>
      </div>
    );
  }
}

function mapStateToProps() {
  return createStructuredSelector({
    city: selectWeatherForecastCity(),
    temp: selectWeatherForecastTemp(),
    wind: selectWeatherForecastWind(),
    isPending: selectWeatherForecastIsPending(),
    isSuccess: selectWeatherForecastIsSuccess(),
    isError: selectWeatherForecastIsError(),
  });
}

function mapDispatchToProps(dispatch: (action: IAction) => {}) {
  return {
    fetchForecast: () => dispatch({
      type: WEATHER_FORECAST_FETCH_WEATHER,
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherForecast);
