import React from "react";
import Card from "@mui/material/Card";
import { iconsServise } from "../services/IconsService";

export function DayPreview({ dayForecast }) {
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
    <div class="temperature"><span>{celciusConverter(dayForecast.Temperature.Minimum.Value)}&deg;</span></div>
    <div class="description">    
      <div class="weatherCondition">{dayForecast.Day.IconPhrase}</div>    
    </div>
  </div>
  <div class="date">{day.substring(0,3)}</div>
</article>
    </div>
  );
}




// {/* <Card variant="elevation" className="daily-forecast">
//       <div>{day.substring(0, 3)}</div>
//       <img src={iconsServise.getWeatherIcon(dayForecast.Day.Icon)} alt="" />
//       <div>
//         {celciusConverter(dayForecast.Temperature.Minimum.Value)}
//         <span>{"C"}</span>
//       </div>
//       <div className="title-appear appear">
//         {celciusConverter(dayForecast.Temperature.Maximum.Value)}
//         {"C"}
//       </div>
//     </Card> */}