import React from "react";
import "../App.css";

export default function WeatherDetailCard(props) {
  return (
    <div className="weather-card">
      <p>{props.firstData}</p>
      <p style={{ fontSize: "28px" }}>{props.secondData}</p>
      <p>{props.thirdData}</p>
    </div>
  );
}
