import React from "react";
import WeatherIcon from "./WeatherIcon";

const ForecastDisplay = ({ data, darkMode }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
    <div
      className={`rounded-lg p-4 ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}
    >
      <h3 className="text-xl font-bold mb-2">5 Days Forecast:</h3>
      {data.fiveDayForecast.map((day, index) => (
        <div key={index} className="grid grid-cols-3 items-center  mb-2">
          <span className="text-center">{day.day}</span>
          <div className="w-full flex justify-center">
            <WeatherIcon condition={day.condition} />
          </div>

          <span className="text-center">{day.temperature}°C</span>
        </div>
      ))}
    </div>
    <div
      className={`rounded-lg p-4 ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}
    >
      <h3 className="text-xl font-bold mb-2">Hourly Forecast:</h3>
      <div className="flex justify-between ">
        {data.hourlyForecast.map((hour, index) => (
          <div key={index} className="text-center">
            <p>{hour.time}</p>
            <div className="w-full flex justify-center">
              <WeatherIcon condition={data.condition} />
            </div>

            <p className="text-lg md:text-2xl">{hour.temperature}°C</p>
            <p className="text-sm md:text-2xl">{hour.windSpeed} km/h</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ForecastDisplay;
