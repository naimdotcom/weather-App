
const apiKey = "0512406cad88a9fa9f9f7374d4247858";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const serchBox = document.querySelector(".serch");
const serchBtn = document.querySelector(".serchBtn");
const weatherImg = document.querySelector(".weather-icon");




const mImages = {
    clouds: './images/clouds.png',
    clear: './images/clear.png',
    drizzle: './images/drizzle.png',
    mist: './images/mist.png',
    rain: './images/rain.png',
    humidity: './images/humidity.png',
    search: './images/seach.png',
    snow: './images/snow.png',
    wind: './images/wind.png',
}


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".cityName").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
    if (data.weather[0].main == "Clouds") {
        weatherImg.src = mImages.clouds;
    } else if (data.weather[0].main == "Clear") {
        weatherImg.src = mImages.clear;
    } else if (data.weather[0].main == "Rain") {
        weatherImg.src = mImages.rain;
    } else if (data.weather[0].main == "Drizzle") {
        weatherImg.src = mImages.drizzle;
    } else if (data.weather[0].main == "Mist") {
        weatherImg.src = mImages.mist;
    } else if (data.weather[0].main == "Snow") {
        weatherImg.src = mImages.snow;
    } else if (data.weather[0].main == "Wind") {
        weatherImg.src = mImages.wind;
    } else if (data.weather[0].main == "Humidity") {
        weatherImg.src = mImages.humidity;
    } else if (data.weather[0].main == "Search") {
        weatherImg.src = mImages.snow;
    }
}

serchBtn.addEventListener("click", () => {
    checkWeather(serchBox.value);
})
serchBox.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        checkWeather(serchBox.value);
    }
    
})

