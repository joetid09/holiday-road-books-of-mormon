let weather = []

export const useWeatherData = () => {
    return weather.slice();
}

const URL = "https://api.openweathermap.org/data/2.5/forecast/daily?" +
    "q=Nashville&cnt=7&units=imperial&APPID=a65ae4abf893dbff2aa3708e7c24953c";

export const getWeatherData = () => {
    let headers = new Headers();

    return fetch(URL, {
        method: 'GET',
        headers: headers
    })
        .then(data => {
            return data.json();
        });
}