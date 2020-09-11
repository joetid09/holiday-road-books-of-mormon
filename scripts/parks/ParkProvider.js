// Original array of returned parks:

let parks = [];

// Use fetch to get TN parks from the NPS api



export const getParks = () => {
    return fetch("https://developer.nps.gov/api/v1/parks?stateCode=tn&api_key=beCzLZwfrt7DummCQLdSR9DMB0Y8OGAfkzCqPA2L")
        .then(response => response.json())
        .then(
            parsedResponse => {
                //console.table(parsedResponse)
                parks = parsedResponse
            }
        )
}

export const useParks = () => {
    return parks.toString();
}

// Create a copy of the original array: UseParks()

