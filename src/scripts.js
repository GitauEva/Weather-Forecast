//Submit Button
let submitBtn = document.querySelector("#submit");

function searchCity(event) {
  event.preventDefault();
  //City Search
  let citySearch = document.querySelector("#search");
  //City h1
  let mainCity = document.querySelector("#main-city");
  let citySearchValue = citySearch.value;

  mainCity.innerHTML = citySearchValue;
}

submitBtn.addEventListener("submit", searchCity);
