import React, { useEffect, useState } from "react";
import WeatherDisplay from "../components/WeatherDisplay";
import ForecastDisplay from "../components/ForecastDisplay";
import { toast } from "react-toastify";
import { API_KEY } from "../config/api";
import axios from "axios";
const HomePage = ({ darkMode, city, setIsLoading }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  const fetchWeatherData = async (cityName) => {
    setIsLoading(true);
    try {
      const currentWeather = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      const forecast = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
      );

      setWeatherData(transformWeatherData(currentWeather.data, forecast.data));
    } catch (error) {
      if (error.status == 404) {
        toast.error("City not found. Please try again.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  //transforming function that turns the data comes from api into a more readable format
  const transformWeatherData = (current, forecast) => {
    const getCurrentTime = () => {
      const date = new Date();
      return date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
    };

    const getFormattedDate = () => {
      const date = new Date();
      return date.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "short",
      });
    };

    const fiveDayForecast = forecast.list
      .filter((item, index) => index % 8 === 0)
      .slice(0, 5)
      .map((item) => ({
        day: new Date(item.dt * 1000).toLocaleDateString("en-US", {
          weekday: "long",
        }),
        temperature: Math.round(item.main.temp),
        condition: item.weather[0].main,
      }));

    const hourlyForecast = forecast.list.slice(0, 5).map((item) => ({
      time: new Date(item.dt * 1000).toLocaleTimeString("en-US", {
        hour: "2-digit",
        hour12: false,
      }),
      temperature: Math.round(item.main.temp),
      windSpeed: Math.round(item.wind.speed),
    }));

    return {
      city: current.name,
      time: getCurrentTime(),
      date: getFormattedDate(),
      temperature: Math.round((current.main.temp * 9) / 5 + 32), // Converting  to Fahrenheit
      feelsLike: Math.round(current.main.feels_like),
      sunrise: new Date(current.sys.sunrise * 1000).toLocaleTimeString(
        "en-US",
        { hour: "2-digit", minute: "2-digit", hour12: false }
      ),
      sunset: new Date(current.sys.sunset * 1000).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
      condition: current.weather[0].main,
      humidity: current.main.humidity,
      windSpeed: Math.round(current.wind.speed * 3.6), // Converting to km/h
      pressure: current.main.pressure,
      uv: "N/A", // OpenWeatherMap doesn't provide UV index in the free tier
      fiveDayForecast,
      hourlyForecast,
    };
  };

  if (!weatherData) return <div className="text-center mt-8">Loading...</div>;

  return (
    <div
      className={`rounded-lg overflow-hidden ${
        darkMode ? "bg-gray-800" : "bg-white shadow-lg"
      }`}
    >
      <WeatherDisplay data={weatherData} darkMode={darkMode} />
      <ForecastDisplay data={weatherData} darkMode={darkMode} />
    </div>
  );
};

export default HomePage;
