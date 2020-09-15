import { URL } from '../parks/Parks.js';

let weather = []

export const useWeatherData = () => {
    return weather.slice();
}

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