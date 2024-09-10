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
  weatherConditions.innerHTML = response.data.condition.description
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());

  //get & update the humidity
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;

  //get & update the wind speed
  let windSpeed = document.querySelector("#wind-speed");
  windSpeed.innerHTML = `${response.data.wind.speed}Km/h`;

  //get & update the time element
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  timeElement.innerHTML = formatDate(date);

  //get & update the weather icon
  let weatherIcon = document.querySelector("#icon");
  weatherIcon.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-icon"/>`;

  getForecast(response.data.city);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day}, ${hours}:${minutes}`;
}

function displayInfo(event) {
  event.preventDefault();

  //Getting the Value in the Search Bar
  let search = document.querySelector("#search");
  let searchValue = search.value;
  //Getting the HTML to be able to display the Value from the search bar

  let cityDisplay = document.querySelector("#main-city");
  cityDisplay.innerHTML = searchValue
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
  searchCity(searchValue);
}

//Display the weather forecast for the next couple of days
function getForecast(city) {
  let apiKey = "f3bc84a5t55d232e835bfe4a96o890e3";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios(apiUrl).then(displayWeatherForecast);
}
function displayWeatherForecast(response) {
  console.log(response.data);

  let days = ["Tue", "Wed", "Thur", "Fri", "Sat"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `<div class="forecast-day-details">
            <div class="weather-forecast-day">${day}</div>
            <div class="weather-forecast-icon">⛅</div>
            <div class="weather-forecast-temps">
              <div class="weather-forecast-temp high"><strong>19°</strong></div>
              <div class="weather-forecast-temp low">12°</div>
            </div>
          </div>`;
  });

  let forecastElement = document.querySelector("#weather-forecast");
  forecastElement.innerHTML = forecastHtml;
}

searchForm.addEventListener("submit", displayInfo);

searchCity("Nairobi");
