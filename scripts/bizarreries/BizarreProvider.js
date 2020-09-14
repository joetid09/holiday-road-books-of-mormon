//Create an empty Attractions [] to hold onto the Bizarre
let bizarre = [];

//Create a eventHub
const eventHub = document.querySelector('#getHub')

//Create a dispatch Event
const dispatchStateChangeEvent = () => {
    const bizarreStateChangeEvent = new CustomEvent("bizarreStateChanged")

    eventHub.dispatchEvent(bizarreStateChangeEvent)
}

//Make a exportable copy of the Bizarre[]
export const useBizarre = () => bizarre.slice()

//Fetch the Bizarre from the DB/API and store in a exportable function
export const getBizarre = () => {
    return fetch('http://holidayroad.nss.team/bizarreries')
    .then(response => response.json())
    .then(parsedBizarre => {
        bizarre = parsedBizarre.filter(tacoObj => tacoObj.state === "TN")
    })
}

//Create a exportable function to save the Bizarre ??? - that calls getBizzarre()
export const saveBizarre = bizarreObj => {
    return fetch("http://holidayroad.nss.team/bizarreries", {
       method: "POST",
       headers: {
           "Content-Type": "application/json"
       },
       body: JSON.stringify(bizarreObj) 
    })
    .then(() => {
        getBizarre()
    })
    .then(() => {
        dispatchStateChangeEvent()
    })
}