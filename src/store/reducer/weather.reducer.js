const initialState = {
    currentWeather: {},
    dailyForecast: {}
}

export function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_CURRENT_WEATHER':
            return { ...state, currentWeather: action.currentWeather }
        case 'SET_DAILY_FORECAST':
            return { ...state, dailyForecast: action.dailyForecast }
        default:
            return state
    }
}