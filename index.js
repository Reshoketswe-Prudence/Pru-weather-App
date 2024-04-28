function showTemperature(response) {
  let temperatureElement = document.querySelector("#current-temp");
  let temperature = Math.round(response.data.temperature.current);
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}
function cityChange(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-search");
  let city = searchInput.value;

  let apiKey = "aft4b837a65cf0aa680cbef4dfdo8c79";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

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
