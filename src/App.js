import { useState, useEffect } from 'react';
import './App.css';
import WeatherLeftSide from './components/WeatherLeftSide';
import WeatherRightSide from './components/WeatherRightSide';

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState('surat'); 

  useEffect(() => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a0165ab15f9d7065abf01fe4b6461de`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Invalid city name');
        }
        return response.json();
      })
      .then(responseData => {
        setData(responseData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        alert('Please enter a valid city name');
      });
  }, [city]);

  const handleCityChange = selectedCity => {
    setCity(selectedCity);
  };

  return (
    <div className="App">
      <WeatherLeftSide onCityChange={handleCityChange} weatherData={data} />
      <WeatherRightSide weatherData={data} />
    </div>
  );
}

export default App;
