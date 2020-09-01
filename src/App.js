import React, { useState } from 'react';
import "./index.scss";

const api = {
  key: "",
  base: "https://api.openweathermap.org/data/2.5/",
  icon: "http://openweathermap.org/img/wn/"
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
        <div className="form__group field">
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
          <label htmlFor="Cityname" className="form__label">Search...</label>
        </div>
      {(typeof weather.main != "undefined") ? (
        <div className ="information">
      <div className="location">{weather.name}, {weather.sys.country}</div>
      <div className="date">{new Date().toDateString()}</div>
      <div className="temperture">{Math.round(weather.main.temp)}°c</div>
      <div className = "weatherIcon">
      <img alt="Qries" src={api.icon + weather.weather[0].icon + "@2x.png"}/>
      </div>
      {console.log(weather)}
            <div className="weather temp">Lowest: {Math.round(weather.main.temp_min)}°C</div>
            <div className="weather temp">Highest: {Math.round(weather.main.temp_max)}°C</div>
      <div className="weather">{weather.weather[0].description}</div>
        </div>
      ) :('')}
    </main>
    </div>
  );
}

export default App;
