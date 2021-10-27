import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Autocomplete, colors } from "@mui/material";
import { TextField } from "@mui/material";
import { WeatherService } from "../services/WeatherService";
import {
  loadCurrentWeather,
  loadDailyForecast,
  setCurrentLocation,
  toggleSnackBar,
} from "../store/action/weather.action";

export function SearchLocation() {
  const dispatch = useDispatch();
  const [locations, setLocations] = useState([]);

  const onSetCity = (_, startWith) => {
    WeatherService.getLocations(startWith)
      .then((locations) => setLocations(locations || []))
      .catch((err) => dispatch(toggleSnackBar(err)));
  };

  const onSetKey = (_, location) => {
    if (!location) return;
    dispatch(loadCurrentWeather(location.Key));
    dispatch(loadDailyForecast(location.Key));
    dispatch(setCurrentLocation(location));
  };
  return (
    <div className="search-bar">
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        onInputChange={onSetCity}
        onChange={onSetKey}
        options={locations}
        getOptionLabel={(location) => location.LocalizedName}
        renderInput={(params) => (
          <TextField variant="outlined" {...params} label="Search City..." />
        )}
      />
    </div>
  );
}
