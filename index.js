let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  function showCurrentTemp(response) {
    let temp = document.querySelector("#num");
    temp.innerHTML = `${Math.round(response.data.main.temp)}`;
    let currentCity = document.querySelector("#current-city");
    currentCity.innerHTML = `${response.data.name}`;
  }
  function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "fddf50dca5fa7aa2e869f9c84bcceac3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showCurrentTemp);
  }
  function changeTemp(response) {
    let temp = document.querySelector("#num");
    temp.innerHTML = `${Math.round(response.data.main.temp)}`;
  }
  function changeCity(event) {
    event.preventDefault();
    let currentCity = document.querySelector("#current-city");
    let city = document.querySelector("#city");
    currentCity.innerHTML = city.value;
    let apiKey = "fddf50dca5fa7aa2e869f9c84bcceac3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(changeTemp);
  }
  function changeToCurrent(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  let today = new Date();
  
  let dayIndex = today.getDay();
  let day = days[dayIndex];
  
  let hour = today.getHours();
  let min = today.getMinutes();
  
  let displayDate = document.querySelector("h3");
  displayDate.innerHTML = `${day} ${hour}:${min}`;
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", changeCity);
  
  let current = document.querySelector("#current-temp");
  current.addEventListener("click", changeToCurrent);
  
  // write your code here
  