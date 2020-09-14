import { useWeatherData, getWeatherData } from './WeatherProvider.js';
import { WeatherHTML } from './Weather.js';

// const eventHub = document.querySelector("#getHub")

// /* ****  ARRESTING OFFICER **** */
// eventHub.addEventListener('officerChosen', event => {
//     // How can you access the officer name that was selected by the user?
//     const officerName = event.detail.officerThatWasChosen
//     if (officerName !== "0") {

//         // How can you get the criminals that were arrested by that officer?

//         const criminals = useCriminals().filter(criminalObject => {
//             return criminalObject.arrestingOfficer === officerName
//         })
//         addOfficersToDOM(criminals);
//     }
//     else {
//         addOfficersToDOM(useOfficers());
//     }

// })


export const WeatherDisplay = () => {
    getWeatherData()
        .then(() => {
            const weatherArray = useWeatherData();
            console.log("weatherArray", weatherArray);
            addWeatherToDOM(weatherArray);
        })
}

const addWeatherToDOM = (aWeatherArray) => {
    const domElement = document.querySelector(".weatherContainer");

    let HTMLArray = aWeatherArray.map(forecast => {
        return WeatherHTML(forecast);
    })
    console.log("HTMLArray", HTMLArray);

    domElement.innerHTML += HTMLArray.join("");
}