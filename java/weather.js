function updateCurrentData(response) {
  let temperatureElement = document.querySelector("#temperature-degree");
  let temperatureDegree = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperatureDegree;
}

function search(event) {
  event.preventDefault();

  let searchInputElement = document.querySelector("#search-form-input");
  let city = searchInputElement.value;

  let apiKey = "3267c26b5357o136a40fatcb1530573a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateCurrentData);
}

function formatDate(date) {
  let days = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let formatDate = days[days];
return `${formatDate} ${hours}:${minutes}`;

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", search);

let applicationDetailsElement = document.querySelector("#application-details");
let applicationDetails = new Date();

applicationDetailsElement.innerHTML = formatDate(applicationDetails);
