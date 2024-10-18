import React from "react";

const WeatherStat = ({ icon, value, label, darkMode }) => (
  <div
    className={`rounded-lg p-3 flex items-center ${
      darkMode ? "bg-gray-700" : "bg-gray-200"
    }`}
  >
    {icon}
    <div className="ml-3">
      <p className="text-xl font-bold">{value}</p>
      <p className="text-sm">{label}</p>
    </div>
  </div>
);

export default WeatherStat;
