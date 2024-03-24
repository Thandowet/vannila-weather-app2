function searching(event) {
  event.preventDefault();
  let searchElement = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#application-city");
  cityElement.innerHTML = searchElement.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searching);
