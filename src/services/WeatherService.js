// import autoComplete from '../data/autoCompleteRespons.json'
// import currentWeather from '../data/currentWeather.json'
// import dailyForecast from '../data/5DaysForecasts.json'
import axios from 'axios'

const API_KEY = '0NGDR7qbB3jAERFSSyArpMpe4Zq3TCQV'

export const WeatherService = {
    getLocations,
    getCurrentWeather,
    getDailyForecast
}

function getLocations(location) {
    // return Promise.resolve(autoComplete)
    return axios
        .get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${location}&language=en`)
        .then(res => res.data)
}

function getCurrentWeather(locationKey) {
    // return Promise.resolve(currentWeather)
    return axios
        .get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}&language=en&details=false`)
        .then(res => res.data)
}

function getDailyForecast(locationKey) {
    // return Promise.resolve(dailyForecast)
    return axios
        .get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&language=en&details=true&metric=true"`)
        .then(res => res.data.DailyForecasts)
}
