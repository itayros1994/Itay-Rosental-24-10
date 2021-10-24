import React from 'react'

export function DayPreview({dayForecast}) {
    return (
        <div className="daily-forecast">
            <div>{new Date(dayForecast.Date).toString()}</div>
            <div>{dayForecast.Temperature.Minimum.Value}<span>{dayForecast.Temperature.Minimum.Unit}</span></div>
            <div>{dayForecast.Temperature.Maximum.Value}<span></span>{dayForecast.Temperature.Maximum.Unit}</div>
        </div>
    )
}
