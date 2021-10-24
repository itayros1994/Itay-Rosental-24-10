import React from "react";
import { DayPreview } from "./DayPreview";

export function DailyForecast({ dailyForecast }) {
  if (!dailyForecast.length) return <div>loading...</div>;
  
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
