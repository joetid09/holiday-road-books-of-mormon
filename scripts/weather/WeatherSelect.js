import { getWeatherData } from './WeatherProvider.js';

// Get a reference to the DOM element where the <select> will be rendered****

// const eventHub = document.querySelector(".container")
// const contentTarget = document.querySelector(".weatherContainer")

// On the event hub, listen for a "change" event.****

// eventHub.addEventListener("change", event => {

//     //WHEN USER SELECTS STATE PARK, 5 DAY FORECAST POPULATES FOR THAT AREA IN WEATHER WIDGET*********

//     if (event.target.id === "parkSelected") {
//         // Get the name of the selected park
//         const selectedPark = event.target.value

//         // Define a custom event
//         const customEvent = new CustomEvent("parkChosen", {
//             detail: {
//                 parkThatWasChosen: selectedPark
//             }
//         })

//         // Dispatch event to event hub
//         eventHub.dispatchEvent(customEvent)
//     }
// })


const CURRENT_LOCATION = document.getElementsByClassName('weather-content__overview')[0];
const CURRENT_TEMP = document.getElementsByClassName('weather-content__temp')[0];
const FORECAST = document.getElementsByClassName('component__forecast-box')[0];

export const SelectedParkWeather = () => {
    getWeatherData()
        .then(weatherData => {
            let city = weatherData.city.name;
            let dailyForecast = weatherData.list;

            renderData(city, dailyForecast);
        });
}

const renderData = (location, forecast) => {
    const currentWeather = forecast[0].weather[0];
    const widgetHeader =
        `<h1>${location}</h1><small>${currentWeather.description}</small>`;

    CURRENT_TEMP.innerHTML =
        `<i class="wi ${applyIcon(currentWeather.icon)}"></i>
    ${Math.round(forecast[0].temp.day)} <i class="wi wi-degrees"></i>`;

    CURRENT_LOCATION.innerHTML = widgetHeader;

    // render each daily forecast
    forecast.forEach(day => {
        let date = new Date(day.dt * 1000);
        let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
        let name = days[date.getDay()];
        let dayBlock = document.createElement("div");
        dayBlock.className = 'forecast__item';
        dayBlock.innerHTML = `
            <div class="forecast-item__heading">${name}</div>
            <div class="forecast-item__info">
                <i class="wi ${applyIcon(day.weather[0].icon)}"></i>
                <span class="degrees">${Math.round(day.temp.day)}
                    <i class="wi wi-degrees"></i>
                </span>
            </div>`;
        FORECAST.appendChild(dayBlock);
    });
}