import React from "react";

const AboutUs = ({ darkMode }) => (
  <div
    className={`${darkMode ? "bg-gray-700" : "bg-gray-100"} p-6 flex flex-col`}
  >
    <h1 className="text-3xl font-bold mb-4 text-center mt-6">
      About Our Weather App
    </h1>
    <p className="my-4 text-center">
      Our weather app provides up-to-date weather information for cities around
      the world. We use reliable data sources to ensure accuracy in our
      forecasts and current weather conditions.
    </p>
    <p className="text-center">
      This app was created as a demonstration of React and API integration
      skills. It uses the OpenWeatherMap API to fetch weather data.
    </p>
  </div>
);

export default AboutUs;
