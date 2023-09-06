import React, { useState } from "react";
import "../App.css";
import { daysOfWeek, weatherIcons } from "../utils/Utils";
import { TiWeatherSunny } from "react-icons/ti";

export default function WeatherLeftSide({ onCityChange, weatherData }) {
  const [city, setCity] = useState("surat");

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearchClick = async () => {
    await onCityChange(city);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };

  const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(2);

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeFormatted = `${(hours % 12 || 12)
      .toString()
      .padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${
      hours < 12 ? "AM" : "PM"
    }`;
    return timeFormatted;
  };

  const currentDate = new Date();
  const formattedDate = `${String(currentDate.getDate()).padStart(2, "0")}-${
    String(currentDate.getMonth() + 1).padStart(2, "0")
  }-${currentDate.getFullYear()}`;

  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const timeFormatted = formatTime(currentDate);
  const formattedDateTime = `${dayOfWeek}, ${timeFormatted}`;

  const currentWeatherCondition =
    weatherData?.weather[0]?.main?.toLowerCase() || "";
  const currentWeatherIcon = weatherIcons[currentWeatherCondition] || (
    <TiWeatherSunny size={120} color="#748cf1" />
  );
  const weatherDescription = weatherData?.weather[0]?.description;

  return (
    <div className="leftSide">
      <div id="search-wrapper">
        <input
          type="text"
          id="search"
          placeholder="City"
          value={city}
          onChange={handleCityChange}
          onKeyPress={handleKeyPress}
        />
        <button id="search-button" onClick={() => onCityChange(city)}>
          <i className="search-icon fas fa-search"></i>
        </button>
      </div>
      <div className="weather-status-image">{currentWeatherIcon}</div>
      <div className="weather-data">
        <h1>
          <span style={{ fontSize: "62px", fontWeight: "lighter" }}>
            {kelvinToCelsius(weatherData?.main?.temp)}&deg;
          </span>
          <span style={{ fontSize: "38px", fontWeight: "lighter", color: 'orange' }}>C</span>
        </h1>
        <p>{currentWeatherCondition}</p>
      </div>
      <div className="hr-line"></div>
      <div className="date-time-data">
        <p style={{ fontSize: "18px" }}>{formattedDate}</p>
        <p style={{ fontSize: "22px" }}>{formattedDateTime}</p>
        <p style={{ fontSize: "18px" }}>
          {weatherDescription}
        </p>
      </div>
      <div className="city-name">
        <p>{weatherData?.name}</p>
      </div>
    </div>
  );
}
