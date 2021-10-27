import React from "react";
import { Button, Card } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites, loadCurrentWeather, loadDailyForecast , setCurrentLocation} from "../store/action/weather.action";
import { iconsServise } from "../services/IconsService";
import { Link } from "react-router-dom";

export function Favorites() {
  const dispatch = useDispatch();
  const { favoritesLocations, currentWeather } = useSelector(
    (state) => state.weatherModule
  );
  
  const locations = favoritesLocations;
  const onRemoveFavorites = (locationKey) => {
    dispatch(removeFromFavorites(locationKey));
    console.log(locations);
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
        {locations.map((location) => (
      <Link to="/" onClick={()=> onClickFavorite(location)} >
          <article class="widget">
          <div class="weatherIcon"><img
              src={iconsServise.getWeatherIcon(currentWeather[0].WeatherIcon)}
              alt=""
            /></div>
          <div class="weatherInfo">
            <div class="temperature"><span>25&deg;</span></div>
            <div class="description">    
              <div class="weatherCondition">CLOUDY</div>    
              <div class="place">{location.LocalizedName.substring(0, 8)}</div>
            </div>
          </div>
          <div class="date">1st Jan</div>
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