// Renders a select HTML element which lists all Bizarre options

import { useBizarre, getBizarre } from "./BizarreProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const eventHub = document.querySelector("#getHub")
const contentTarget = document.querySelector("#biz")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {
    // Only do this if the `bizarreSelect` element was changed
    if (event.target.id === "biz") {
        const selectedBizarre = event.target.value
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("bizarreChosen", {
            detail: {
                bizarreThatWasChosen: selectedBizarre
            }
        })
        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

// EXPORT FUNCTION

export const BizarreSelect = () => {
    // Get all convictions from application state
    getBizarre()
        .then(() => {
            const bizarres = useBizarre()
            const sortedArray = [];
            bizarres.map(bizarreObj => {
                sortedArray.push(bizarreObj.name)
            })
            sortedArray.sort();
            render(sortedArray)
        })
}

//RENDER

const render = (bizarreCollection) => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="bizarreSelect">
            <option value="0">Let's get Bizarre...</option>
            ${bizarreCollection.map(bizarre => {
            return `<option value="${bizarre}">${bizarre}</option>`
        })
        }
        </select>
    `
}