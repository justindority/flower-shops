import { fetchDistributorNurseries, fetchDistributors, fetchFlowers, fetchNurseries, fetchNurseryFlowers, fetchRetailers, getApplicationState } from "./dataAccess.js"
import { flowerWebsite } from "./flowerWebsite.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchFlowers()
    .then(() => fetchRetailers())
    .then(() => fetchDistributors())
    .then(() => fetchDistributorNurseries())
    .then(() => fetchNurseryFlowers())
    .then(() => fetchNurseries())
    .then(
        () => {
            let state = getApplicationState()
            mainContainer.innerHTML = flowerWebsite(state)
        }
    )
}

//custom event to re-render html on state change
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

render()
