const initialState = {
    currentWeather: {},
    dailyForecast: {},
    currentLocation: {},
    favoritesLocations: [],
    darkMode: false

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
        default:
            return state
    }
}