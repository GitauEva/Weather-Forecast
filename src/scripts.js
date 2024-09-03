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
