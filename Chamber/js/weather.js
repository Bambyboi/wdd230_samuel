const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=samoa&appid=3d651779761435e479e104b935a3e586";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        displayWeather(jsObject);
    });

function displayWeather(jsObject) {
    document.querySelector('#temperature').textContent = jsObject.main.temp;
    //document.querySelector('#condition').textContent = jsObject.weather.0.description;
    //document.querySelector('#weatherIcon').textContent = jsObject.main.temp;
    document.querySelector('#windspeed').textContent = jsObject.wind.speed;
    document.querySelector('#windchill').textContent = jsObject.main.feels_like;

}
"https://api.openweathermap.org/data/2.5/weather?q=samoa&appid=3d651779761435e479e104b935a3e586"