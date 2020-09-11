// get the list of TN parks

import { getParks, useParks } from "./ParkProvider.js"

const contentTarget = document.querySelector("#parks")

export const ParkSelect = () => {
    getParks()
        .then(() => {
            const parks = useParks()
            const sortedArray = []
            parks.map(parkObj => {
                sortedArray.push(parkObj.fullName)
            })
            sortedArray.sort()
            render(sortedArray)
        })

}

const render = parksCollection => {
    //const listItems = useParks()
    contentTarget.innerHTML = `
    <select id="#parks">
        <option value="0">Please select a park</option>
    
        ${
        parksCollection.map(parkObj => {
            const park = parkObj.fullName
            return `<option value="${park}">${park}</option>`
        })
        }
    </select>
`
}


