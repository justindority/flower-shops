export const findNurseries = (retailer,state) => {
    let foundNurseries = state.distributorNurseries.filter(DN => {return DN.distributorId === retailer.distrubutorId})
    return `${foundNurseries.map(fN => {
        return `<p>${findNursery(fN,State)}</p>`
    }
    ).join("")
}`
}

export const findNursery = (foundNursery, state) => {
    return state.nurseries.find(nurs => {return nurs.id === foundNursery.nurseryId})
}