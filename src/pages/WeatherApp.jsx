import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadCurrentWeather,
  loadDailyForecast,
} from "../store/action/weather.action";
import { WeatherService } from "../services/WeatherService";
import { CurrentWeather } from "../cmps/CurrentWeather";
import { DailyForecast } from "../cmps/DailyForecast";

export function WeatherApp() {
  const [locations, setLocations] = useState([]);

  const { currentWeather, dailyForecast } = useSelector(
    (state) => state.weatherModule
  );

  const dispatch = useDispatch();

  const onSetCity = (ev) => {
    let location = ev.target.value;
    WeatherService.getLocations(location).then((locations) =>
      setLocations(locations)
    );
  };

  const onSetKey = (locationKey) => {
    dispatch(loadCurrentWeather(locationKey));
    dispatch(loadDailyForecast(locationKey));
  };

  return (
    <div>
      <form className="search-container" autoComplete="off">
        <input
          variant="outlined"
          className="search-input"
          color="primary"
          type="text"
          onChange={onSetCity}
          placeholder="Search City"
        ></input>
        <ul className="locations-names-container">
          {locations.map((location) => (
            <div
              onClick={() => onSetKey(location.Key)}
              className="locations-names"
              key={location.Key}
            >
              {location.LocalizedName}
            </div>
          ))}
        </ul>
      </form>
      <CurrentWeather currentWeather={currentWeather}></CurrentWeather>
      <DailyForecast dailyForecast={dailyForecast}></DailyForecast>
    </div>
  );
}
