let weather = []

export const useWeatherData = () => {
    return weather.slice();
}

const URL = "https://api.openweathermap.org/data/2.5/onecall?lat=36&lon=-86&exclude=current,hourly,minutely&appid=4f3b62dffc1a390df4e9b0693dc0f8e3&units=imperial";


export const getWeatherData = () => {
    return fetch(URL)
        .then(response => response.json())
}


// export const getWeatherData = () => {
//     let headers = new Headers();

//     return fetch(URL, {
//         method: 'GET',
//         headers: headers
//     })
//         .then(data => {
//             return data.json();
//         });
// }