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
    return `<section class="eateryHead">
                    <h2>${eateryObject.businessName}</h2>
                <div class="dropdown">
                    <span>Detail</span>
                        <div class="dropdown-content">
                            <p>${eateryObject.city}, ${eateryObject.state}<p>
                             <p>${eateryObject.description}</p>
                         </div>
                </div>
            </section>`

    // < h3 > ${ eateryObject.businessName }</h3 >
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