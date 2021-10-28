import autoComplete from '../data/autoCompleteRespons.json'
import currentWeather from '../data/currentWeather.json'
import dailyForecast from '../data/5DaysForecasts.json'
import userLocation from '../data/userLocation.json'
import axios from 'axios'

// const API_KEY = '0NGDR7qbB3jAERFSSyArpMpe4Zq3TCQV'
// const API_KEY = 'f1ihnGpONArGZtNAW0GN02tuAEBGMUG6'
const API_KEY = 'Y8RgWkfnkR5YW0qdYKAo37G47EibuAGA'


export const WeatherService = {
    getLocations,
    getCurrentWeather,
    getDailyForecast,
    getKeyFromCords,

}

function getLocations(location) {
    // return Promise.resolve(autoComplete)
    // return Promise.reject('chuppp')
    return axios
        .get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${location}&language=en`)
        .then(res => res.data)
}

function getCurrentWeather(locationKey) {
    // return Promise.resolve(currentWeather)
    // return Promise.reject('chuppp23')

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


function getKeyFromCords(geoposition) {
// return Promise.resolve(userLocation)
return axios.get(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${geoposition.latitude}%2C${geoposition.longitude}&language=en`).then(res => res.data)

}
