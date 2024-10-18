import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllRoutes from "./router/AllRoutes";
import Navbar from "./components/NavBar";
import { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [city, setCity] = useState("Ethiopia");
  const [isLoading, setIsLoading] = useState(false);

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };
  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onCityChange={handleCityChange}
        isLoading={isLoading}
      />
      <div className="container mx-auto px-4 py-8">
        <AllRoutes
          city={city}
          darkMode={darkMode}
          setIsLoading={setIsLoading}
        />
      </div>
    </div>
  );
};

export default App;
