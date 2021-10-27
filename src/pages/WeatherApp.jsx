import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CurrentWeather } from "../cmps/CurrentWeather";
import { DailyForecast } from "../cmps/DailyForecast";
import { WeatherService } from "../services/WeatherService";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useEffect } from "react";
import { toggleSnackBar } from "../store/action/weather.action";
import { loadCurrentWeather, loadDailyForecast, setCurrentLocation } from "../store/action/weather.action";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function WeatherApp() {
  const {
    currentWeather,
    dailyForecast,
    userLocation,
    snackBarOpen,
    errorMessege,
  } = useSelector((state) => state.weatherModule);

  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(toggleSnackBar());
  };

  useEffect(() => {
    WeatherService.getKeyFromCords(userLocation).then((res) => {
      dispatch(loadCurrentWeather(res.Key));
      dispatch(loadDailyForecast(res.Key));
      dispatch(setCurrentLocation({key : res.Key , LocalizedName: res.LocalizedName})); 
    });
  }, []);

  return (
    <div>
      <div className="top-container">
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
