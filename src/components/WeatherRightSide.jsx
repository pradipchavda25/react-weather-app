import React from "react";
import "../App.css";
import WeatherDetailCard from "./WeatherDetailCard";
const countryList = require("country-list"); 

export default function WeatherRightSide({ weatherData }) {

  function kelvinToCelsius(kelvin) {
    return (kelvin - 273.15).toFixed(2);
  }

  const kelvinTempMax = weatherData?.main?.temp_max;
  const kelvinTempMin = weatherData?.main?.temp_min;

  const updatedTempMax = kelvinToCelsius(kelvinTempMax);
  const updatedTempMin = kelvinToCelsius(kelvinTempMin);

  const countryCode = weatherData?.sys?.country;
  const countryName = countryCode ? countryList.getName(countryCode) : "Unknown";


  return (
    <div className="rightSide">
      <div className="weather-day">
        <p>Today Weather of <span style={{color: '#0031ff'}}>{weatherData?.name}</span> </p>
      </div>
      <div className="weather-cards">
        <WeatherDetailCard
          firstData="Wind"
          secondData={`${weatherData?.wind?.speed} km/h`}
          thirdData={`${weatherData?.wind?.deg} deg`}
        />
        <WeatherDetailCard
          firstData="Humidity"
          secondData={`${weatherData?.main?.humidity}%`}
        />
        <WeatherDetailCard
          firstData="Max Temperature"
          secondData={`${updatedTempMax} °C`}
        />

        <WeatherDetailCard
          firstData="Min Temperature"
          secondData={`${updatedTempMin} °C`}
        />
        <WeatherDetailCard
          firstData="Pressure"
          secondData={`${weatherData?.main?.pressure} hPa`}
        />
        <WeatherDetailCard
          firstData="Country"
          secondData={countryName}
        />
      </div>
    </div>
  );
}
