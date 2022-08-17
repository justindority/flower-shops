import { findNursery } from "./nurseries.js"

export const flowersHtml = (state) => {
    return `${state.flowers.map(flower => {
        return `<p>${flower.name}</p>`
    }).join("")
    }`
}


//idk
export const findFlowers = (retailer, state) => {
    let foundDistributorNurseries = state.distributorNurseries.filter(distNurs => {return distNurs.distributorId === retailer.distributorId})
    return `<h4>Flowers Available:</h4>${foundDistributorNurseries.map(distNurs => {
        let foundNurseryFlowers = state.nurseryFlowers.filter(nursFlower => {return nursFlower.nurseryId === distNurs.nurseryId})
        return `${foundNurseryFlowers.map(nurseryFlower => {
            let flowers = state.flowers.filter(flower => {return flower.id === nurseryFlower.flowerId})
            let foundNursery = findNursery(nurseryFlower, state)
            return `${flowers.map(flower => {
                return `<p>${flower.name} from the ${foundNursery.name} nursery<p>`
            }).join("")}`
        }).join("")}`
    }).join("")}`
}
