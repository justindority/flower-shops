const API = "http://localhost:8088"

const applicationState = {}

export const getApplicationState = () => {
    return structuredClone(applicationState)
}

//create api call to grab flowers
export const fetchFlowers = () => {
    return fetch(`${API}/flowers`)
    .then(response => response.json())
    .then(
        (flowers) => {
            // Store the external state in application state
            applicationState.flowers = flowers
        }
    )
}

//create api call to grab retailers
export const fetchRetailers = () => {
    return fetch(`${API}/retailers`)
    .then(response => response.json())
    .then(
        (retailers) => {
            // Store the external state in application state
            applicationState.retailers = retailers
        }
    )
}

//create api call to grab retailers
export const fetchDistributors = () => {
    return fetch(`${API}/distributors`)
    .then(response => response.json())
    .then(
        (distributors) => {
            // Store the external state in application state
            applicationState.distributors = distributors
        }
    )
}

//create api call to grab nurseries
export const fetchNurseries = () => {
    return fetch(`${API}/nurseries`)
    .then(response => response.json())
    .then(
        (nurseries) => {
            // Store the external state in application state
            applicationState.nurseries = nurseries
        }
    )
}

//create api call to grab distributorNurseries
export const fetchDistributorNurseries = () => {
    return fetch(`${API}/distributorNurseries`)
    .then(response => response.json())
    .then(
        (distributorNurseries) => {
            // Store the external state in application state
            applicationState.distributorNurseries = distributorNurseries
        }
    )
}

//create api call to grab nurseryFlowers
export const fetchNurseryFlowers = () => {
    return fetch(`${API}/nurseryFlowers`)
    .then(response => response.json())
    .then(
        (nurseryFlowers) => {
            // Store the external state in application state
            applicationState.nurseryFlowers = nurseryFlowers
        }
    )
}