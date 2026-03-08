const apiKey = "2fa47489903e61fa2d4bd4d5cabc1fca";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    const data = await response.json();

    if (data.cod === "404") {
        document.querySelector(".city").innerHTML = "City not found!";
        document.querySelector(".temp").innerHTML = "-";
        document.querySelector(".humidity").innerHTML = "-";
        document.querySelector(".wind").innerHTML = "-";
    } else {
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    }
    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "./images/clouds.png";
    }
    else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "./images/clear.png";
    }
    else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "./images/rain.png";
    }
    else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "./images/drizzle.png";
    }
    else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "./images/mist.png";
    }
    else if (data.weather[0].main === "Snow") {
        weatherIcon.src = "./images/snow.png";
    }
    document.querySelector(".weather").style.display = "block";


}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

