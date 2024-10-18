import React from "react";
import { Sun, Sunrise, Sunset, Droplet, Wind, Thermometer } from "lucide-react";
import WeatherStat from "./WeatherStat";
import WeatherIcon from "./WeatherIcon";

const WeatherDisplay = ({ data, darkMode }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
    <div
      className={`rounded-lg p-4 ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}
    >
      <h2 className="text-3xl font-bold">{data.city}</h2>
      <p className="text-5xl mt-2">{data.time}</p>
      <p className="text-lg">{data.date}</p>
    </div>
    <div
      className={`rounded-lg p-4 ${
        darkMode ? "bg-gray-700" : "bg-gray-100"
      } flex justify-between items-center`}
    >
      <div>
        <p className="text-5xl font-bold">{data.temperature}°F</p>
        <p className="text-xl">Feels like: {data.feelsLike}°C</p>
        <div className="flex items-center mt-2">
          <Sunrise className="mr-2" />
          <span>Sunrise: {data.sunrise}</span>
        </div>
        <div className="flex items-center mt-1">
          <Sunset className="mr-2" />
          <span>Sunset: {data.sunset}</span>
        </div>
      </div>
      <div className="text-center">
        <WeatherIcon condition={data.condition} />
        <p className="text-xl mt-2">{data.condition}</p>
      </div>
    </div>
    <div className="col-span-1 md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
      <WeatherStat
        icon={<Droplet />}
        value={`${data.humidity}%`}
        label="Humidity"
        darkMode={darkMode}
      />
      <WeatherStat
        icon={<Wind />}
        value={`${data.windSpeed} km/h`}
        label="Wind Speed"
        darkMode={darkMode}
      />
      <WeatherStat
        icon={<Thermometer />}
        value={`${data.pressure} hPa`}
        label="Pressure"
        darkMode={darkMode}
      />
      <WeatherStat
        icon={<Sun />}
        value={data.uv}
        label="UV"
        darkMode={darkMode}
      />
    </div>
  </div>
);

export default WeatherDisplay;
