export const findDistributor = (ret, state) => {
    let foundDistributor = state.distributors.find(dist => {return dist.id === ret.distributorId})
    return `${foundDistributor.name}`
}