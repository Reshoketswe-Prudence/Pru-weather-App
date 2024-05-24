function showTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let h1 = document.querySelector("h1");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#current-date");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  h1.innerHTML = response.data.city;
  timeElement.innerHTML = addingDate(date);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  temperatureElement.innerHTML = Math.round(temperature);
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class = "weather-app-icon" />`;

  getForecast(response.data.city);
}
function cityChange(city) {
  let apiKey = "aft4b837a65cf0aa680cbef4dfdo8c79";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(showTemperature);
}

function dealWithSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-search");
  cityChange(searchInput.value);
}

let searchElement = document.querySelector("#search-options");
searchElement = addEventListener("submit", dealWithSearchSubmit);

cityChange("Paris");

function addingDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let addedDate = days[day];
  return `${addedDate} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-options");
searchForm.addEventListener("submit", addingDate);

let currentDate = document.querySelector("#current-date");
let todaysDate = new Date();

currentDate.innerHTML = addingDate(todaysDate);

function getForecast(city) {
  let apiKey = "aft4b837a65cf0aa680cbef4dfdo8c79";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  axios(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  console.log(response.data);

  let days = ["Wed", "Thu", "Fri", "Sat", "Sun"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `<div class="row">
          <div class="column-2">
            <div class="weather-forecast-date">${day}</div>
            <span class="material-symbols-outlined">cloud</span>
            <div class="weather-forecast-temperature">
              <span class="weather-forecast-temperature-max">18&deg;</span>
              <span class="weather-forecast-temperature-min">12&deg;</span>
            </div>
          </div>
        </div>`;
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}
getForecast("Paris");
