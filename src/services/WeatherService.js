import autoComplete from '../data/autoCompleteRespons.json'
import currentWeather from '../data/currentWeather.json'
import dailyForecast from '../data/5DaysForecasts.json'

export const WeatherService = {
    getLocations,
    getCurrentWeather,
    getDailyForecast
}

function getLocations(location) {
    return Promise.resolve(autoComplete)
}

function getCurrentWeather(locationKey) {
    return Promise.resolve(currentWeather)
}

function getDailyForecast(locationKey) {
    return Promise.resolve(dailyForecast)
}

