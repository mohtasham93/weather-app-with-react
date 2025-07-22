import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"


function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ff08c228b6dffa084712f0b23a4ad6c9`
    );
    const data = await response.json();
    setWeather(data);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={fetchWeather}>
        <input
          type="text" id="input"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
       
          <Button variant="primary">Check Weather</Button>
        
      </form>
           
      {weather && (
        <div id="weather_info">
          <h3>Weather Info of {city}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Wind Speed: {weather.wind.speed}</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  )
}

export default App;
