const getHub = document.querySelector("#getHub")

getHub.addEventListener("change", event => {

    if (event.target.id === "eateries") {
        const newEvent = new CustomEvent("eateryChosen", {
            detail: {
                eateryThatWasChosen: event.target.value
            }
        })
        getHub.dispatchEvent(newEvent)
        // console.log(newEvent.detail.eateryThatWasChosen)
    }

})

getHub.addEventListener("click", event => {
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
    let amenetyCheck = (amenety) => {
        if (amenety === false) {
            return "✔"
        }
        else {
            return "❌"
        }
    }
    console.log(amenetyCheck(eateryObject.ameneties.petFriendly))
    return `<section class="eateryHead">
                    <h2>${eateryObject.businessName}</h2>
                <div class="dropdown">
                    <span>Detail</span>
                        <div class="dropdown-content">
                            <p>${eateryObject.city}, ${eateryObject.state}<p>
                                <ul id="amenities">
                                    <li>Pet Friendly: ${amenetyCheck(eateryObject.ameneties.petFriendly)}</li >
                                    <li>Wheelchair Accessibility: ${amenetyCheck(eateryObject.ameneties.wheelchairAccessible)}</li>
                                    <li>Restrooms: ${amenetyCheck(eateryObject.ameneties.restrooms)}</li>

                             <p>${eateryObject.description}</p>
                             <p>Pet friendly: ${eateryObject.ameneties.petFriendly}</p>
                             
                         </div >
                </div >
            </section > `

    // < h3 > ${eateryObject.businessName}</h3 >
    //     <div class="hoverButton">
    //         <span>Details</span>
    //         <div class="dropdown-content">
    //             <p> Located in: ${eateryObject.city}, ${eateryObject.state}</p>
    //             <p> ${eateryObject.description}</p>
    //         </div>
    //     </div>

    // <ul class="eateryAmenities" >
    // <li>${eateryObject.amenities.wheelchairAccessible}</li>
    // <li>${eateryObject.}</li>
    // <li>${eateryObject.}</li>
    // <li>${eateryObject.}</li>
    // <li>${eateryObject.}</li>
    // </ul >
}