// import { URL } from '../parks/Parks.js';

let weather = []

export let URL = "https://api.openweathermap.org/data/2.5/onecall?lat=36&lon=-86&exclude=current,hourly,minutely&appid=4f3b62dffc1a390df4e9b0693dc0f8e3&units=imperial";

export const useWeatherData = () => {
    return weather.slice();
}

export const getWeatherData = () => {
    return fetch(URL)
        .then(response => response.json())
}