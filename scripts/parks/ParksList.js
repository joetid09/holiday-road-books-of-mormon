import { ParkHTML, } from "./Parks.js"
import { getParks, useParks } from "./ParkProvider.js"

const eventHub = document.querySelector("#getHub")
const contentTarget = document.querySelector(".parkHeader")

export const ParkList = () => {
    getParks()
        .then(useParks)
        .then(render())

}

eventHub.addEventListener('parkSelected', changeEvent => {
    if (changeEvent.detail.parkThatWasSelected !== "0") {

        const selectedPark = useParks().filter(currentPark => {
            return currentPark.fullName === changeEvent.detail.parkThatWasSelected
        })
        render(selectedPark)
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







/*const render = (parkObj) => {
    contentTarget.innerHTML = `
    <section class="parkHeader">
        <h2>${parkObj.fullName}</h2>
    </section>
    `
}*/



