let searchForm = document.querySelector("#search-form");

function displayInfo(event) {
  event.preventDefault();

  //Getting the Value in the Search Bar
  let search = document.querySelector("#search");
  let searchValue = search.value;
  //Getting the HTML to be able to display the Value from the search bar
  let cityDisplay = document.querySelector("#main-city");
  cityDisplay.innerHTML = searchValue;
}

searchForm.addEventListener("submit", displayInfo);
