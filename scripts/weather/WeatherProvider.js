let weather = []

export const useWeatherData = () => {
    return weather.slice();
}

const URL = "api.openweathermap.org/data/2.5/forecast?q=nashville&appid=4f3b62dffc1a390df4e9b0693dc0f8e3";

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