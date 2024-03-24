function updateCurrentData(response) {
  let temperatureElement = document.querySelector("#temperature-degree");
  let temperatureDegree = response.data.temperature.current;

  temperatureElement.innerHTML = Math.round(temperatureDegree);
}

function searchCity(city) {
  let apiKey = "3267c26b5357o136a40fatcb1530573a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateCurrentData);
}

function search(event) {
  event.preventDefault();

  let searchInputElement = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;
  searchCity(searchInputElement.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", search);

searchCity(Durban);