import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

const apiKey = import.meta.env.VITE_API_KEY;
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

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°F";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " mph";

    const weatherIcon = document.querySelector(".weather-icon");
    console.log("Weather Icon Element:", weatherIcon); // Check if the element is found

    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "./public/images/clouds.png";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "./public/images/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "./public/images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "./public/images/mist.png";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "./public/images/clear.png";
    }

    console.log("Weather Icon Path Set:", weatherIcon.src); // Check if the path is being set

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

checkWeather("Grand Rapids");

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
