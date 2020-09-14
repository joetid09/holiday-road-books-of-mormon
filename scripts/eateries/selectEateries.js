import { getEateries, useEateries } from "./EateriesProvider.js"
import { eateryItinerary } from "./eatery.js"

const eateryArticle = document.querySelector(".eateries")
const selectionList = document.querySelector("#eateries")
const getHub = document.querySelector("#getHub")

// below  filters list to be rendered to eateryArticle so that only the selected eatery renders
getHub.addEventListener("eateryChosen", event => {
    console.log("beginning of eatery filter")
    if (event.detail.eateryThatWasChosen !== "0") {
        let eatery = useEateries().filter(restaurant => {
            return restaurant.businessName === event.detail.eateryThatWasChosen
        }
        )
        renderItinerary(eatery)
    } else {
        const placeHolder = document.querySelector(".eateries")
        placeHolder.innerHTML = `<h2>Please select an eatery</h2>`
    }
})

// below is code that takes the filtered list (seen above) and makes a new array for the items, then converts
// to HTML as defined in eateryItinerary function (found in eatery.js)
const renderItinerary = (eateryArray) => {
    const eateryArticle = document.querySelector(".eateries")

    let HTMLarray = eateryArray.map(firstEatery => {
        return eateryItinerary(firstEatery)
    })
    eateryArticle.innerHTML = HTMLarray.join("")
}

// below takes the array from useEateries and creates a dropdown list in HTML for selecting eatery
const renderDropDown = selectEateries => {
    const listItems = useEateries()
    selectionList.innerHTML = `
    <option value="0">What's for Dinner?</option>
    ${listItems.map(itemObject => {
        const eateryName = itemObject.businessName
        return `<option value="${eateryName}">${eateryName}</option>`
    })
        }`
}

// const eateryItinerary = (eateryArray) => {
//     const eateryArticle = document.querySelector(".eateries")
//     // create a new array using.map and create HTML for requested dropdown selection

// }

// function takes all the work above, and provides a quick function to invoke on main.js (gets the ball rolling for 
//  all the above code)
export const eaterySelectList = () => {
    getEateries()
        .then(() => {
            renderDropDown(useEateries())
        }
        )
}