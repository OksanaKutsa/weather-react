import "./SearchEngine.css";
import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  const [city, setCity] = useState(" ");
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  function displayDate() {
    let date = new Date().getDate();
    if (date < 10) {
      date = `0${date}`;
    }
    let month = new Date().getMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    }
    let year = new Date().getFullYear();
    let weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = weekDays[new Date().getDay()];
    let fullDate = date + "/" + month + "/" + year + "  " + day;
    setDate(fullDate);
  }
  function displayTime() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let time = hours + ":" + minutes;
    setTime(time);
  }

  function dispalyWeather(response) {
    setLoaded(true);
    displayDate();
    displayTime();
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "427e704ef746829b25864c7ff811b8fc";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(dispalyWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            onChange={updateCity}
            placeholder="Type a city.."
            className="form-control "
            autocomplete="off"
          />
        </div>
        <div class="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100 "
          />
        </div>
      </div>
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <ul className="weatherList">
          <li>{weather.city}</li>
          <li>Today</li>
          <li>Temperature: {Math.round(weather.temperature)}˚C </li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {Math.round(weather.wind)}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>{" "}
          <li>{date}</li>
          <li>{time}</li>
        </ul>
      </div>
    );
  } else {
    let city = "Kyiv";
    let apiKey = "427e704ef746829b25864c7ff811b8fc";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(dispalyWeather);
    return "Loading...";
  }
}
