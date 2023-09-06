import {
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherPartlySunny,
  TiWeatherShower,
  TiWeatherSnow,
  TiWeatherStormy,
  TiWeatherSunny,
  TiWeatherWindyCloudy,
} from "react-icons/ti";

export const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const weatherIcons = {
  "clear": <TiWeatherSunny size={120} color="#748cf1" />,
  "few clouds": <TiWeatherPartlySunny size={120} color="#748cf1" />,
  'clouds': <TiWeatherCloudy size={120} color="#748cf1" />,
  "broken clouds": <TiWeatherWindyCloudy size={120} color="#748cf1" />,
  'Drizzle': <TiWeatherShower size={120} color="#748cf1" />,
  'rain': <TiWeatherDownpour size={120} color="#748cf1" />,
  'thunderstorm': <TiWeatherStormy size={120} color="#748cf1" />,
  'snow': <TiWeatherSnow size={120} color="#748cf1" />,
  'mist': <TiWeatherCloudy size={120} color="#748cf1" />,
};
