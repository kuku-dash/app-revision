function formatDate(timestamp) {
  let now = new Date(timestamp);
  let year = now.getFullYear();
  let date = now.getDate();
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = now.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[now.getMonth()];
  let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
  let day = days[now.getDay()];

  return `${day}, ${date} ${month}, ${year} ${hour}:${minute}`;
}

function showTemperature(response) {
  let temp = document.querySelector("#temperature");
  let desc = document.querySelector("#description");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let city = document.querySelector("#cityName");
  let date = document.querySelector("#date");

  temp.innerHTML = Math.round(response.data.main.temp);
  desc.innerHTML = response.data.weather[0].description;
  humidity.innerHTML = response.data.main.humidity;
  wind.innerHTML = Math.round(response.data.wind.speed);
  city.innerHTML = response.data.name;
  date.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "93c9302a335ce19bd3e0802426872a43";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemperature);
