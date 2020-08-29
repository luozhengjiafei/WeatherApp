import React, { useState } from 'react';
import "./index.scss";
import "./Icon.jsx";
import WeatherIcon from './Icon.jsx';

const api = {
  key: "88e35fa22188bc3f2d579571d989e2e4",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
        });
    }
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app evening' : 'app') : 'app'}>
    <main>
        <div class="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="CityName"
            name="Cityname"
            id='Cityname'
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
          <label for="Cityname" class="form__label">Search...</label>
        </div>
      {(typeof weather.main != "undefined") ? (
        <div className ="information">
      <div className="location">{weather.name},{weather.sys.country}</div>
      <div className="date">{new Date().toDateString()}</div>
      <div className="temperture">{Math.round(weather.main.temp)}°c</div>
        <WeatherIcon status = 
          {weather.text}

          />
      <div className="weather">{weather.weather[0].main}</div>
        </div>
      ) :('')}
    </main>
    </div>
  );
}

export default App;
