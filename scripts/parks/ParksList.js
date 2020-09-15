import { ParkHTML, } from "./Parks.js"
import { getParks, useParks } from "./ParkProvider.js"
import { SelectedParkWeather } from '../weather/WeatherSelect.js';

const eventHub = document.querySelector("#getHub")
const contentTarget = document.querySelector(".parkHeader")

export const ParkList = () => {
    getParks()
        .then(useParks)
        .then(render())

}
//Listen for custom event dispatched from ParkSelect
eventHub.addEventListener('parkSelected', changeEvent => {
    if (changeEvent.detail.parkThatWasSelected !== "0") {

        // Filter parks app state down to the park that was selected

        const selectedPark = useParks().filter(currentPark => {
            return currentPark.fullName === changeEvent.detail.parkThatWasSelected
        })
        // Invoke render() and pass the filtered collection as an argument
        render(selectedPark)
        SelectedParkWeather();
    }
})

/* Map through the array and get the single park ready to be rendered to DOM.
Not sure if I need this, because the .filter above should only be returning one park.
*/
const render = (parksCollection = []) => {
    contentTarget.innerHTML = parksCollection.map((singlePark) => {
        return ParkHTML(singlePark)
    }).join("");

}