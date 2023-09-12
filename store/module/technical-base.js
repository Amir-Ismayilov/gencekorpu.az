const state = {
  technical_base: []
}

const getters = {
  getAllTechnicalBase: (state) => {
    return state.technical_base
  }
}

const actions = {
  async getTechnicalBaseArray(context) {
    const {data} = await this.$axios.$get('/technical-base');
    context.commit('setTechnicalBase', [data])
    return data;
  },
}

const mutations = {
  setTechnicalBase: (state, [data = null]) => {
    if (data) {
      state.technical_base = data
    }
  },
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
