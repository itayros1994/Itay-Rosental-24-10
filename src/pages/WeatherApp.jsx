import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CurrentWeather } from "../cmps/CurrentWeather";
import { Hero } from "../cmps/Hero";
import { DailyForecast } from "../cmps/DailyForecast";
import { WeatherService } from "../services/WeatherService";
import { locationService } from "../services/locationService";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import {
  loadCurrentWeather,
  loadDailyForecast,
  setCurrentLocation,
  toggleSnackBar,
  setUserLocation,
} from "../store/action/weather.action";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function WeatherApp() {
  const {
    currentWeather,
    dailyForecast,
    snackBarOpen,
    errorMessege,
    currentLocation,
  } = useSelector((state) => state.weatherModule);

  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(toggleSnackBar());
  };
  
  const loadWeatherData =(coords) => {
    if (Object.keys(currentLocation).length === 0) {
      WeatherService.getKeyFromCords(coords)
        .then((res) => {
          dispatch(loadCurrentWeather(res.Key));
          dispatch(loadDailyForecast(res.Key));
          dispatch(setCurrentLocation(res));
        })
        .catch((err) => dispatch(toggleSnackBar(err)));
    }
  }
  const success = (pos) => {
    loadWeatherData(pos.coords)
  };

  const err = (err) => {
    let telAviv = {
      latitude: "32.0853",
      longitude: "34.7818",
    };
    loadWeatherData(telAviv)
  };

  useEffect(() => {
    locationService.getCurrentPosition(success, err);
  }, []);

  return (
    <div>
      <div className="top-container">
      {/* <Hero /> */}
        <CurrentWeather currentWeather={currentWeather}></CurrentWeather>
      </div>
      <DailyForecast dailyForecast={dailyForecast}></DailyForecast>
      <div>
        <Snackbar
          open={snackBarOpen}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {errorMessege}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}
