import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

const apiKey = "d52139fb3686303fbfed39f69f0a77cb";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    // get wind speed console.log(data.wind.speed);
    // get humidity console.log(data.main.humidity);
    // temp console.log(data.main.temp);
    // get city name console.log(data.name);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°F";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " mph";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./src/images/clouds.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./src/images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "./src/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./src/images/mist.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./src/images/clear.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

checkWeather("Grand Rapids");

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
