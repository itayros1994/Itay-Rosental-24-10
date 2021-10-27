import React from "react";
import { Button, Card } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites, loadCurrentWeather, loadDailyForecast , setCurrentLocation} from "../store/action/weather.action";
import { iconsServise } from "../services/IconsService";
import { Link } from "react-router-dom";

export function Favorites() {
  const dispatch = useDispatch();
  const { favoritesLocations, currentWeather, celcius } = useSelector(
    (state) => state.weatherModule
  );
  
  const locations = favoritesLocations;
  const onRemoveFavorites = (locationKey) => {
    dispatch(removeFromFavorites(locationKey));
    console.log(currentWeather);
  };

  // if(currentWeather.length === 0) return
  // let day = new Date(currentWeather[0].EpochTime).toString().substring(0,3);

  const onClickFavorite = (location) => {
    dispatch(loadCurrentWeather(location.Key));
      dispatch(loadDailyForecast(location.Key));
      dispatch(setCurrentLocation(location));
  }
  
  return (
    <div>
      <h1 className="favorties-header">Favorites Cities!</h1>
      <div className="favorites-container">
      <div className={favoritesLocations.length ? 'yes-favorites' : 'no-favorites'}>No Favorites Yet!</div>
        {locations.map((location) => (
      <Link to="/" onClick={()=> onClickFavorite(location)} >
          <article class="widget">
          <div class="weatherIcon"><img
              src={iconsServise.getWeatherIcon(currentWeather[0].WeatherIcon)}
              alt=""
            /></div>
          <div class="weatherInfo">
            <div class="temperature">{celcius ? <span>{currentWeather[0].Temperature.Metric.Value}&deg;</span> :  <span>{currentWeather[0].Temperature.Imperial.Value}&deg;</span>}</div>
            <div class="description">    
              <div class="weatherCondition">{currentWeather[0].WeatherText}</div>    
              <div class="place">{location.LocalizedName.substring(0, 8)}</div>
            </div>
          </div>
          <div class="date">{new Date(currentWeather[0].EpochTime).toString().substring(0,3)}</div>
              <Button className="remove-favorite"
              onClick={() => onRemoveFavorites(location.Key)}
              color="info"
              variant="contained"
            >
              Remove
            </Button>
        </article> 
        </Link> 
        ))}
      </div>
      
    </div>
  );
}


{/* <div className="favorites-list">
            <Link onClick={()=> onClickFavorite(location.Key)} to={`/main/${location.Key}`}>
            <div>{location.LocalizedName.substring(0, 8)}</div><br/>
            <img
              src={iconsServise.getWeatherIcon(currentWeather[0].WeatherIcon)}
              alt=""
            />
              </Link>
            <Button
              onClick={() => onRemoveFavorites(location.Key)}
              color="success"
              variant="contained"
            >
              Remove
            </Button>
          </div> */}