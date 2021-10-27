import { Card } from "@mui/material";
import React from "react";
import Loader from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import { setToFavorites } from "../store/action/weather.action";
import Button from "@mui/material/Button";
import { iconsServise } from "../services/IconsService";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export function CurrentWeather({ currentWeather }) {
  const { currentLocation } = useSelector((state) => state.weatherModule);

  const dispatch = useDispatch();
  const onSetToFavorite = (ev) => {
    dispatch(setToFavorites(currentLocation));
  };

  // if(!currentWeather[0].LocalObservationDateTime) return
  // let day = new Date(currentWeather[0].LocalObservationDateTime).toString();
  let day = "MON";
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
      <article class="widget2">
        <div className="current-top-container">
          <div class="weatherIcon2">
            <img 
              src={iconsServise.getWeatherIcon(currentWeather[0].WeatherIcon)}
              alt=""
            />
          </div>
          <FavoriteBorderIcon
            onClick={onSetToFavorite}
            className="favorite-btn"
            variant="contained"
          >
            Add To Favorite
          </FavoriteBorderIcon>
        </div>
        <div class="current-buttom-container">
        <div class="weatherInfo2">
          <div class="temperature2">
            <span>{currentWeather[0].Temperature.Metric.Value}&deg;</span>
          </div>
          <div class="description2">
            <div class="weatherCondition2">{currentWeather[0].WeatherText}</div>
            <div class="place2">{currentLocation.LocalizedName}</div>
          </div>
        </div>
        <div class="date2">{day.substring(0, 3)}</div>
        </div>
      </article>
    </div>
  );
}

 