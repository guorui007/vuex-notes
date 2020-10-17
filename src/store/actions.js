

export const initial = ({ commit }) => {
    commit("setInnitialdata")
}

export const create = ({ commit }) => {
    commit('createdata')
}

export const update = ({ commit }, entity) => {
    //console.log("555", entity)
    commit('updateData', entity)
}