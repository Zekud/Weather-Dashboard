import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, MapPin, Menu, X } from "lucide-react";
import { ClipLoader } from "react-spinners";

const Navbar = ({ darkMode, setDarkMode, onCityChange, isLoading }) => {
  const [city, setCity] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    if (city.trim()) {
      onCityChange(city);
      setCity("");
    }
  };

  return (
    <>
      <nav className={`p-4 ${darkMode ? "bg-gray-800" : "bg-white shadow"}`}>
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex gap-x-4 items-center">
              <Link
                to="/"
                className={`text-2xl font-bold cursor-pointer ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Weather App
              </Link>
              <Link
                to="/about"
                className={`hidden md:block text-2xl  cursor-pointer ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                About Us
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Search for your preferred city..."
                  className={`p-2 pr-10 rounded-full w-80 ${
                    darkMode
                      ? "bg-gray-700 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {isLoading ? (
                    <ClipLoader
                      loading={isLoading}
                      color={darkMode ? "#f7f7f7" : "#333"}
                      size={20}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  ) : (
                    <MapPin
                      className={darkMode ? "text-gray-400" : "text-gray-600"}
                    />
                  )}
                </button>
              </form>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-700"
              >
                {darkMode ? (
                  <Sun className="text-yellow-400" />
                ) : (
                  <Moon className="text-gray-600" />
                )}
              </button>
            </div>
            <button
              className="md:hidden z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && ( // Showing sidebar when isMenuOpen is true
        <div
          className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-40 md:hidden transition-transform duration-400 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div
            className={`absolute right-0 w-64 ${
              darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"
            } h-full p-4 transition-transform duration-400`}
          >
            <form onSubmit={handleSubmit} className="mt-10 mb-4">
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Search for your preferred city..."
                className={`p-2 w-full rounded ${
                  darkMode
                    ? "bg-gray-700 text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
              />
            </form>
            <Link
              to="/"
              className="block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="py-2 flex items-center"
            >
              {darkMode ? (
                <Sun className="text-yellow-400 mr-2" />
              ) : (
                <Moon className="text-gray-600 mr-2" />
              )}
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
