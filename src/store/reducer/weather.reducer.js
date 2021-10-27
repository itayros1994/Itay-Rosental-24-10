const initialState = {
    currentWeather: {},
    dailyForecast: {},
    currentLocation: {},
    favoritesLocations: [],
    darkMode: false,
    userLocation: {
        latitude: '32.558147',
        longitude: '35.074886'
    },
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
            return { ...state, favoritesLocations: [...state.favoritesLocations, action.currentLocation] }
        case 'SET_CURRENT_LOCATION':
            return { ...state, currentLocation: action.currentLocation }
        case 'TOGGLE_DARK_MODE':
            return { ...state, darkMode: !state.darkMode }
        case 'TOGGLE_SNACK_BAR':
            return { ...state, snackBarOpen: !state.snackBarOpen, errorMessege: action.errorMessege  }
        case 'REMOVE_LOCATION_FAVORITE':
            return { ...state, favoritesLocations: state.favoritesLocations.filter(location => location.Key !== action.locationKey) }
        default:
            return state
    }
}