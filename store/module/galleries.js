const state = {
  galleries: []
}

const getters = {
  getAllGalleries: (state) => {
    return state.galleries
  }
}

const actions = {
  async getGalleriesArray(context) {
    const {data} = await this.$axios.$get('/galleries');
    context.commit('setGalleries', [data])
    return data;
  },
}

const mutations = {
  setGalleries: (state, [data = null]) => {
    if (data) {
      state.galleries = data
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
