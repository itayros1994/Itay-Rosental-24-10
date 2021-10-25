import React from "react";
import { DayPreview } from "./DayPreview";
import Loader from "react-loader-spinner";

export function DailyForecast({ dailyForecast }) {
  if (!dailyForecast.length) return <div><Loader></Loader></div>;
  
  return (
    <div>
      <div className="daily-list">
        {dailyForecast.map((dayForecast) => {
          return <DayPreview dayForecast={dayForecast} />;
        })}
      </div>
    </div>
  );
}
