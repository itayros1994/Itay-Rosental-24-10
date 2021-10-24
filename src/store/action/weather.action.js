import { WeatherService } from "../../services/WeatherService"


export function loadCurrentWeather(locationKey) {
  return async (dispatch) => {
    try {
      const currentWeather = await WeatherService.getCurrentWeather(locationKey)
      const action = {
        type: 'SET_CURRENT_WEATHER',
        currentWeather
      }
      dispatch(action)
    } catch (err) {
      console.log('error from catch load current weather', err);
    }
  }
}

export function loadDailyForecast(locationKey) {
  return async (dispatch) => {
    try {
      const dailyForecast = await WeatherService.getDailyForecast(locationKey)
      const action = {
        type: 'SET_DAILY_FORECAST',
        dailyForecast
      }
      dispatch(action)
    } catch (err) {
      console.log('error from catch load daily forecast', err);
    }
  }
}

