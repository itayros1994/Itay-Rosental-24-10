import React from "react";
import Card from "@mui/material/Card";
import { iconsServise } from "../services/IconsService";
import { useSelector } from "react-redux";

export function DayPreview({ dayForecast }) {
  const { celcius} = useSelector(
    (state) => state.weatherModule
  );
  

  const celciusConverter = (farnhiet) => {
    let celcius = (5 * (farnhiet - 32)) / 9;
    return Math.round(celcius);
  };
  let day = new Date(dayForecast.Date).toString();
  return (
    <div className="daily-forecast-container">
    <article class="widget">
  <div class="weatherIcon"><img src={iconsServise.getWeatherIcon(dayForecast.Day.Icon)} alt="" /></div>
  <div class="weatherInfo">
    <div class="temperature"> {celcius ? <span>{celciusConverter(dayForecast.Temperature.Maximum.Value)}&deg;C</span>  : <span>{dayForecast.Temperature.Maximum.Value}&deg;f</span>}</div>
    <div class="description">    
      <div class="weatherCondition">{dayForecast.Day.IconPhrase}</div>    
    </div>
  </div>
  <div class="date">{day.substring(0,3)}</div>
</article>
    </div>
  );
}



