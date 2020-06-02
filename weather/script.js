let select = document.querySelector("#cities");
let city = "q=Moscow";

function changeCity() {
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?" +
      city +
      "&appid=ab817cf473d2f1de016d2705a947df69"
  )
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      document.querySelector(".city-name").textContent = data.name;
      document.querySelector(".city-temp").innerHTML = `${Math.round(
        data.main.temp - 273
      )}&#176;C`;
      document.querySelector(".weatherСonditions").textContent =
        data.weather[0].description;
      document.querySelector(
        ".wind"
      ).innerHTML = `Speed wind: ${data.wind.speed} m/s`;
    });
}

changeCity();

function change() {
  city = "q=" + this.textContent;
  changeCity();
}

document.querySelector(".moscow").addEventListener("click", change);
document.querySelector(".london").addEventListener("click", change);
document.querySelector(".paris").addEventListener("click", change);
document.querySelector(".berlin").addEventListener("click", change);
