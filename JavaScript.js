let weather={
apiKey: "ff9b54d807d74b47e52fd001fabf3a48",

fetchWeather: function() {
    fetch(
"https://api.openweathermap.org/data/2.5/weather?q=Tampere&units=metric&appid=ff9b54d807d74b47e52fd001fabf3a48"
).then((Response) => Response.json())
.then((data) => this.displayWeather(data))

},
displayWeather: function(data){
    const {description} = data.weather[0];
    const { temp, humidity} = data.main;
    const {speed} = data.wind;
    console.log(description,temp,humidity,speed);
    document.querySelector(".description").innerText = description;
    document.querySelector(".temperature").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".windSpeed").innerText = "Wind speed: " + speed + " km/h";
}
};

weather.fetchWeather();