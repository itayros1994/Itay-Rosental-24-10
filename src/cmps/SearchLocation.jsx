import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import { WeatherService } from "../services/WeatherService";
import {
  loadCurrentWeather,
  loadDailyForecast,
  setCurrentLocation,
} from "../store/action/weather.action";

export function SearchLocation() {
  const dispatch = useDispatch();
  const [locations, setLocations] = useState([]);

  const onSetCity = (_, locationName) => {
    WeatherService.getLocations(locationName).then((locations) =>
      setLocations(locations || [])
    );
  };

  const onSetKey = (_, location) => {
    if (!location) return;
    dispatch(loadCurrentWeather(location.Key));
    dispatch(loadDailyForecast(location.Key));
    dispatch(setCurrentLocation(location));
  };

  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        onInputChange={onSetCity}
        onChange={onSetKey}
        options={locations}
        getOptionLabel={(location) => location.LocalizedName}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Search City..." />
        )}
      />
    </div>
  );
}
