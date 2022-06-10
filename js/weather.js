const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "82ee61288711c4393cd7dfff06564318";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  console.log("You live in", lat, long);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Can't find you... no weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
