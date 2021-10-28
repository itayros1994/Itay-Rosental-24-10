import React from "react";
import { Button, Card } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites, loadCurrentWeather, loadDailyForecast , setCurrentLocation} from "../store/action/weather.action";
import { iconsServise } from "../services/IconsService";
import { Link } from "react-router-dom";

export function Favorites() {
  const dispatch = useDispatch();
  const { favoritesLocations, celcius } = useSelector(
    (state) => state.weatherModule
  );
  console.log(favoritesLocations);
  const onRemoveFavorites = (locationKey) => {
    dispatch(removeFromFavorites(locationKey));
  };

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
        {favoritesLocations.map((location) => (
          <article class="widget-favorite ">
            <Link to="/" onClick={()=> onClickFavorite(location)} >
          <div class="weatherIcon"><img
              src={iconsServise.getWeatherIcon(location.currentWeather[0].WeatherIcon)}
              alt=""
            /></div>
          <div class="weatherInfo">
            <div class="temperature">{celcius ? <span>{location.currentWeather[0].Temperature.Metric.Value}&deg;</span> :  <span>{location.currentWeather[0].Temperature.Imperial.Value}&deg;</span>}</div>
            <div class="description">    
              <div class="weatherCondition">{location.currentWeather[0].WeatherText}</div>    
              <div class="place">{location.currentLocation.LocalizedName.substring(0, 8)}</div>
            </div>
          </div>
          <div class="date">{new Date(location.currentWeather[0].EpochTime).toString().substring(0,3)}</div>
          </Link> 
              <Button className="remove-favorite"
              onClick={() => onRemoveFavorites(location.currentLocation.Key)}
              color="info"
              variant="contained"
            >
              Remove
            </Button>
        </article> 
        ))}
      </div>
      
    </div>
  );
}

