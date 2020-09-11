const getHub = document.querySelector("#getHub")

getHub.addEventListener("change", event => {
    if (event.target.id === "#eateries") {
        const newEvent = CustomEvent("eateryChosen", {
            detail: {
                eateryThatWasChosen: event.target.id
            }
        })
        getHub.dispatchEvent(newEvent)
    }
    console.log("i clicked it")
})


export const eateryItinerary = (eateryObject) => {
    return `<h3>${eateryObject.businessName}</h3>
                <p>${eateryObject.description}</p>`
    // <ul class="eateryAmenities" >
    // <li>${eateryObject.amenities.wheelchairAccessible}</li>
    // <li>${eateryObject.}</li>
    // <li>${eateryObject.}</li>
    // <li>${eateryObject.}</li>
    // <li>${eateryObject.}</li>
    // </ul >
}