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
      dispatch(toggleSnackBar(err));
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
      dispatch(toggleSnackBar(err));

    }
  }
}

export function setCurrentLocation(currentLocation) {
  return (dispatch) => {
      const action = {
        type: 'SET_CURRENT_LOCATION',
        currentLocation
      }
      dispatch(action)
  }
}

export function removeFromFavorites(locationKey) {
  return (dispatch) => {
      const action = {
        type: 'REMOVE_LOCATION_FAVORITE',
        locationKey
      }
      dispatch(action) 
  }
}

export function setToFavorites(favorite) {
  return async (dispatch) => {
    try {
      const action = {
        type: 'SET_LOCATION_FAVORITE',
        favorite
      }
      dispatch(action)
    }
      catch (err) {
        dispatch(toggleSnackBar(err));
      }
  }
}


export function toggleDarkMode() {
  return (dispatch) => {
      const action = {
        type: 'TOGGLE_DARK_MODE',
      }
      dispatch(action)
  }
}
export function toggleTemperature() {
  return (dispatch) => {
      const action = {
        type: 'TOGGLE_TEMPERATURE',
      }
      dispatch(action)
  }
}


export function toggleSnackBar(errorMessege) {
  return (dispatch) => {
      const action = {
        type: 'TOGGLE_SNACK_BAR',
        errorMessege}
      dispatch(action)
  }
}



