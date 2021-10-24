import React from "react";

export function CurrentWeather({ currentWeather }) {
  if (!currentWeather.length) return <div>loading...</div>;
  
  return <div>{currentWeather[0].WeatherText}</div>;
}
