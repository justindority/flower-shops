import { findDistributor } from "./distributors.js"
import { findFlowers } from "./flowers.js"
import { findNurseries } from "./nurseries.js"

export const retailersHtml = (state) => {
    return `${state.retailers.map(ret => {
        return `<h3>${ret.name}</h3>
                <p>This shop purchases from ${findDistributor(ret,state)}</p>${findNurseries(ret,state)}${findFlowers(ret,state)}<hr>`
    }).join("")
    }`
}