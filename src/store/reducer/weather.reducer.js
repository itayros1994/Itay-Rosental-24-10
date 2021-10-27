const initialState = {
    currentWeather: {},
    dailyForecast: {},
    currentLocation: {},
    favoritesLocations: [],
    darkMode: false,
    celcius : true,
    snackBarOpen : false,
    errorMessege : ''
}

export function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_CURRENT_WEATHER':
            return { ...state, currentWeather: action.currentWeather }
        case 'SET_DAILY_FORECAST':
            return { ...state, dailyForecast: action.dailyForecast }
        case 'SET_LOCATION_FAVORITE':
            if(state.favoritesLocations.includes(action.currentLocation)) return state 
            return { ...state, favoritesLocations: [...state.favoritesLocations, action.currentLocation] }
        case 'SET_CURRENT_LOCATION':
            return { ...state, currentLocation: action.currentLocation }
        case 'TOGGLE_DARK_MODE':
            return { ...state, darkMode: !state.darkMode }
        case 'TOGGLE_TEMPERATURE':
            return { ...state, celcius: !state.celcius }
        case 'TOGGLE_SNACK_BAR':
            return { ...state, snackBarOpen: !state.snackBarOpen, errorMessege: action.errorMessege  }
        case 'REMOVE_LOCATION_FAVORITE':
            return { ...state, favoritesLocations: state.favoritesLocations.filter(location => location.Key !== action.locationKey) }
        default:
            return state
    }
}