import { getEateries, useEateries } from "./EateriesProvider.js"
import { eateryItinerary } from "./eatery.js"

const selectionList = document.querySelector("#eateries")
const getHub = document.querySelector("#getHub")

getHub.addEventListener("eateryChosen", event => {
    if (event.target.eateryThatWasChosen !== "0") {

    }
})

const renderDropDown = selectEateries => {
    const listItems = useEateries()
    selectionList.innerHTML = `
    <option value="0">What's for Dinner?</option>
    ${
        listItems.map(itemObject => {
            const eateryName = itemObject.businessName
            return `<option value="${eateryName}>${eateryName}</option>`
        })
        }`
}

const renderItinerary = () => {

}
export const eaterySelectList = () => {
    getEateries()
        .then(() => {
            renderDropDown(useEateries())
        }
        )
}