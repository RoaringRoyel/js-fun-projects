const apikey = "0db7f35dffdc29fb13fc7e66f8fc7351";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function fetchWeatherData(city) {
    try {
        const response = await fetch(
            `${apiUrl}?q=${city}&appid=${apikey}&units=metric`
        );
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML  = data.name;
        document.querySelector(".temp").innerHTML  = Math.round(data.main.temp) + "°C" ;
        document.querySelector(".humidity").innerHTML  = data.main.humidity+"%";
        document.querySelector(".wind").innerHTML  = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";

    } catch (error) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        console.error("Error fetching weather data:", error);
    }
}
searchBtn.addEventListener("click", () => {
    const city = searchBox.value;
    if (city) {
        fetchWeatherData(city);
    }
});