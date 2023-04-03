function showTemperature(response) {
  console.log(response.data);
  let temp = document.querySelector("#temperature");
  let desc = document.querySelector("#description");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let city = document.querySelector("#cityName");

  temp.innerHTML = Math.round(response.data.main.temp);
  desc.innerHTML = response.data.weather[0].description;
  humidity.innerHTML = response.data.main.humidity;
  wind.innerHTML = response.data.wind.speed;
  city.innerHTML = response.data.name;
}

let apiKey = "93c9302a335ce19bd3e0802426872a43";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemperature);
