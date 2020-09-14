// get the list of TN parks

import { getParks, useParks } from "./ParkProvider.js"

/* Reference the place on the DOM where the eventHub lives, and the place where
contentTarget where the select will be rendered */

const contentTarget = document.querySelector("#parks")
const eventHub = document.querySelector("#getHub")

// Export the ParkSelect function

export const ParkSelect = () => {
    getParks()
        .then(() => {
            const parks = useParks()
            render(parks)
        })


}

// Render the dropdown html
const render = parksCollection => {
    contentTarget.innerHTML = `
    <select id="#parks">
        <option value="0">Please select a park</option>
    
        ${parksCollection.map(parkObj => {
        const park = parkObj.fullName
        return `<option value="${park}">${park}</option>`
    })
        }
    </select>
`
}

// Add an eventListener and a custom event for the selected park
eventHub.addEventListener('change', changeEvent => {
    if (changeEvent.target.id === "parks") {
        const parkSelectedEvent = new CustomEvent("parkSelected", {
            detail: {
                parkThatWasSelected: changeEvent.target.value
            }
        })


        eventHub.dispatchEvent(parkSelectedEvent)

    }
})



