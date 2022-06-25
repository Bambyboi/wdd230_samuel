const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=samoa&units=Imperial&appid=3d651779761435e479e104b935a3e586";

// select HTML elements in the document
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('.weather_img');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?q=samoa&units=Imperial&appid=3d651779761435e479e104b935a3e586"
apiFetch(url);

async function apiFetch(apiurl) {
    try {
        const response = await fetch(apiurl);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherData) {
    currentTemp.innerHTML = weatherData.main.temp.toFixed(1);

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}






fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        displayWeather(jsObject);
    });

function displayWeather(jsObject) {
    //document.querySelector('#temperature').textContent = jsObject.main.temp;
    //document.querySelector('#condition').textContent = jsObject.weather.0.description;
    //document.querySelector('#weatherIcon').textContent = jsObject.main.temp;
    document.querySelector('#windspeed').textContent = jsObject.wind.speed;
    document.querySelector('#windchill').textContent = jsObject.main.feels_like;

}
"https://api.openweathermap.org/data/2.5/weather?q=samoa&appid=3d651779761435e479e104b935a3e586"