import { flowersHtml } from "./flowers.js"
import { retailersHtml } from "./retailers.js"

export const flowerWebsite = (state) => {
    return `${flowersHtml(state)}${retailersHtml(state)}`
}