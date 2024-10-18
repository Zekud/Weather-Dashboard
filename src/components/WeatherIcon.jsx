import React from "react";
import { Sun, Cloud, CloudRain } from "lucide-react";

const WeatherIcon = ({ condition }) => {
  switch (condition?.toLowerCase()) {
    case "clear":
      return <Sun className="w-8 h-8 md:w-16 md:h-16 text-yellow-400 " />;
    case "clouds":
      return <Cloud className="w-8 h-8 md:w-16 md:h-16 text-gray-400" />;
    case "rain":
      return <CloudRain className="w-8 h-8 md:w-16 md:h-16 text-blue-400" />;
    default:
      return <Sun className="w-8 h-8 md:w-16 md:h-16 text-yellow-400" />;
  }
};

export default WeatherIcon;
