// get the list of TN parks

import { getParks, useParks } from "./ParkProvider.js"

const contentTarget = document.querySelector("#parks")
const eventHub = document.querySelector("#getHub")

export const ParkSelect = () => {
    getParks()
        .then(() => {
            const parks = useParks()
            render(parks)
        })


}

const render = parksCollection => {
    //const listItems = useParks()
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

eventHub.addEventListener('change', changeEvent => {
    if (changeEvent.target.id === "parks") {
        const parkSelectedEvent = new CustomEvent("parkSelected", {
            detail: {
                parkThatWasSelected: changeEvent.target.value
            }
        })
        //console.log(changeEvent)

        eventHub.dispatchEvent(parkSelectedEvent)

    }
})



