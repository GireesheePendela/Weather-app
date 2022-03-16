function enterCity(event) {
  event.preventDefault();
  let cityElement = document.querySelector("h2");
  let searchInput = document.querySelector("#exampleInputEmail1");
  cityElement.innerHTML = `${searchInput.value}`;
}

function toFahreheit(event) {
  event.preventDefault();

  let temperatureElement = document.querySelector("#infoData");
  temperatureElement.innerHTML = 75;
}
function toCelsuis(event) {
  event.preventDefault();

  let temperatureElement = document.querySelector("#infoData");
  temperatureElement.innerHTML = 25;
}
let fahreheitLink = document.querySelector("#fahreheit-link");
fahreheitLink.addEventListener("click", toFahreheit);

let celsuisLink = document.querySelector("#celsuis-link");
celsuisLink.addEventListener("click", toCelsuis);

let submitForm = document.querySelector("form");
submitForm.addEventListener("submit", enterCity);

// date
function UpdateDate(date) {
  let now = new Date();
  console.log(now);

  let dates = now.getDate();
  let year = now.getFullYear();
  let weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let days = weekdays[now.getDay()];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[now.getMonth()];
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dateForToday = document.querySelector(".current-date");
  dateForToday.innerHTML = `${days}, ${dates} ${month}, ${year}`;
  let timeForToday = document.querySelector(".current-time");
  timeForToday.innerHTML = `${hours} : ${minutes}`;
}
UpdateDate();
