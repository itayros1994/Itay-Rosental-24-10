import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CurrentWeather } from "../cmps/CurrentWeather";
import { DailyForecast } from "../cmps/DailyForecast";
import Button from "@mui/material/Button";
import { setToFavorites } from "../store/action/weather.action";

export function WeatherApp() {
  const dispatch = useDispatch();
  const { currentWeather, dailyForecast, currentLocation } = useSelector(
    (state) => state.weatherModule
  );

  const onSetToFavorite = () => {
    dispatch(setToFavorites(currentLocation));
  };

  return (
    <div>
      <div className="top-container">
        <CurrentWeather currentWeather={currentWeather}></CurrentWeather>
        <Button
          onClick={onSetToFavorite}
          className="favorite-btn"
          variant="contained"
        >
          Add To Favorite
        </Button>
      </div>
      <DailyForecast dailyForecast={dailyForecast}></DailyForecast>
    </div>
  );
}
