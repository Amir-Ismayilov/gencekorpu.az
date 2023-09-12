const state = {
  managements: []
}

const getters = {
  getAllManagements: (state) => {
    return state.managements
  }
}

const actions = {
  async getManagementArray(context) {
    const {data} = await this.$axios.$get('/managements');
    context.commit('setManagements', [data])
    return data;
  },
}

const mutations = {
  setManagements: (state, [data = null]) => {
    if (data) {
      state.managements = data
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
