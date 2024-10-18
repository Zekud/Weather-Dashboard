import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
function AllRoutes({ city, darkMode, setIsLoading }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            city={city}
            darkMode={darkMode}
            setIsLoading={setIsLoading}
          />
        }
      />
      <Route path="/about" element={<AboutUs darkMode={darkMode} />} />
    </Routes>
  );
}

export default AllRoutes;
