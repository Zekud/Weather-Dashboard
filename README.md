# Weather Dashboard

A React-based weather application that provides up-to-date weather information for cities around the world using the OpenWeatherMap API.

## Setup Instructions

To set up and run the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Install dependencies**:
   Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root of the project and add your OpenWeatherMap API key:

   ```plaintext
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   ```

4. **Run the application**:
   Start the development server:

   ```bash
   npm start
   ```

5. **Open your browser**:
   Navigate to `http://localhost:3000` to view the application.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For routing and navigation within the application.
- **Axios**: For making HTTP requests to the OpenWeatherMap API.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Lucide React**: For using icons in the application.
- **React Toastify**: For displaying notifications.
- **React Spinners**: For loading indicators.

## Known Issues / Assumptions

- The application assumes that the user has a valid OpenWeatherMap API key.
- The weather data is fetched based on the city name input; if the city is not found, an error message will be displayed.
- The UI is designed for desktop and mobile views.
- OpenWeatherMap doesn't provide UV index in the free tier

Feel free to contribute to the project or report any issues you encounter!
