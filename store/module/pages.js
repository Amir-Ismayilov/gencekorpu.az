const state = {
  pages: []
}

const getters = {
  getAllPages: (state) => {
    return state.pages
  }
}

const actions = {
  async getPagesArray(context) {
    const {data} = await this.$axios.$get('/pages');
    context.commit('setPages', [data])
    return data;
  },

  async getPagesByIdApi({commit}, id) {
    const {data}= await this.$axios.$get(`/pages/show/${id}`);
    return data;
  },
}

const mutations = {
  setPages: (state, [data = null]) => {
    if (data) {
      state.pages = data
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
