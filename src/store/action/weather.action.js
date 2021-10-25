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

export function setCurrentLocation(currentLocation) {
  return (dispatch) => {
    try {
      const action = {
        type: 'SET_CURRENT_LOCATION',
        currentLocation
      }
      dispatch(action)
    } catch (err) {
      console.log('error from set curr location', err);
    }
  }
}


export function setToFavorites(currentLocation) {
  return (dispatch) => {
    try {
      const action = {
        type: 'SET_LOCATION_FAVORITE',
        currentLocation
      }
      dispatch(action)
    } catch (err) {
      console.log('error from catch add to favorite', err);
    }
  }
}

export function toggleDarkMode() {
  return (dispatch) => {
    try {
      const action = {
        type: 'TOGGLE_DARK_MODE',
      }
      dispatch(action)
    } catch (err) {
      console.log('error from catch add to favorite', err);
    }
  }
}



