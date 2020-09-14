const getHub = document.querySelector("#getHub")

getHub.addEventListener("change", event => {

    if (event.target.id === "eateries") {
        console.log("did if statement pass?")
        const newEvent = new CustomEvent("eateryChosen", {
            detail: {
                eateryThatWasChosen: event.target.value
            }
        })
        getHub.dispatchEvent(newEvent)
        console.log(newEvent.detail.eateryThatWasChosen)
    }

})

getHub.addEventListener("eateryDetails", event => {
    if (event.target.id === "eateryDetails") {
        const detailEvent = new CustomEvent("detailsChosen", {
            detail: {
                detailButtonChosen: "details"
            }
        })
        getHub.dispatchEvent(detailEvent)
    }

})

export const eateryItinerary = (eateryObject) => {
    return `<h3>${eateryObject.businessName}</h3>
                <p>${eateryObject.description}</p>
                <button type="button"id="eateryDetails" onClick="alert('${eateryObject.businessName})"git >details</button>`
    // <ul class="eateryAmenities" >
    // <li>${eateryObject.amenities.wheelchairAccessible}</li>
    // <li>${eateryObject.}</li>
    // <li>${eateryObject.}</li>
    // <li>${eateryObject.}</li>
    // <li>${eateryObject.}</li>
    // </ul >
}