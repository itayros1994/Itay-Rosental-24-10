import { Card } from "@mui/material";
import React from "react";
import Loader from "react-loader-spinner";
import { useSelector ,useDispatch} from "react-redux";
import { setToFavorites } from "../store/action/weather.action";
import Button from "@mui/material/Button";
import { iconsServise } from "../services/IconsService";

export function CurrentWeather({ currentWeather }) {
  const { currentLocation } = useSelector((state) => state.weatherModule);
  
  const dispatch = useDispatch()
  const onSetToFavorite = (ev) => {
    dispatch(setToFavorites(currentLocation));
  };

  // if(!currentWeather[0].LocalObservationDateTime) return
  // let day = new Date(currentWeather[0].LocalObservationDateTime).toString();
  let day = 'MON'
  console.log(day);
  console.log(currentWeather);

  if (!currentWeather.length)
    return (
      <div>
        <Loader></Loader>
      </div>
    );
  return (
    <div className="current-weather-container">
        <Button 
          onClick={onSetToFavorite}
          className="favorite-btn"
          variant="contained"
        >
          Add To Favorite
        </Button>
      <article class="widget2">
  <div class="weatherIcon2"><img src={iconsServise.getWeatherIcon(currentWeather[0].WeatherIcon)} alt="" /></div>
  <div class="weatherInfo2">
    <div class="temperature2"><span>{currentWeather[0].Temperature.Metric.Value}&deg;</span></div>
    <div class="description2">    
      <div class="weatherCondition2">{currentWeather[0].WeatherText}</div>    
      <div class="place2">{currentLocation.LocalizedName}</div>
    </div>
  </div>
  <div class="date2">{day.substring(0,3)}</div>
</article>

    </div>
  );
}



  {/* <div variant="elevation" className="current-weather">
      <div>{currentWeather[0].WeatherText}</div>
      <div>
        {currentWeather[0].Temperature.Metric.Value}{" "}
        {currentWeather[0].Temperature.Metric.Unit}
      </div>
      <img
        src={iconsServise.getWeatherIcon(currentWeather[0].WeatherIcon)}
        alt=""
      />
      <div>{currentLocation.LocalizedName}</div>
      <div>
        {" "}
      </div>
    </div> */}