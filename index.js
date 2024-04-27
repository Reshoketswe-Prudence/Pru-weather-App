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
