let searchForm = document.querySelector("#search-form");

function searchCity(city) {
  let apiKey = "f3bc84a5t55d232e835bfe4a96o890e3";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(updateWeather);
}

function updateWeather(response) {
  let temperatureValue = Math.floor(response.data.temperature.current);
  let weatherValue = document.querySelector("#weather-value");
  weatherValue.innerHTML = temperatureValue;

  //get & update the weather conditions
  let weatherConditions = document.querySelector("#weather-condition");
  weatherConditions.innerHTML = response.data.condition.description;

  //get & update the humidity
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;

  //get & update the wind speed
  let windSpeed = document.querySelector("#wind-speed");
  windSpeed.innerHTML = `${response.data.wind.speed}Km/h`;
}

function displayInfo(event) {
  event.preventDefault();

  //Getting the Value in the Search Bar
  let search = document.querySelector("#search");
  let searchValue = search.value;
  //Getting the HTML to be able to display the Value from the search bar

  let cityDisplay = document.querySelector("#main-city");
  cityDisplay.innerHTML = searchValue;
  searchCity(searchValue);
}

searchForm.addEventListener("submit", displayInfo);
