import React from "react";
export default function Weather() {
  function handleResponse(response) {
    alert(`The weather in New York is ${response.data.main.temp}°C`);
  }
  let apiKey = "0a521eaf234a3a56f45252fac3c737ad";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return <h2>Hello from weather</h2>;
}
