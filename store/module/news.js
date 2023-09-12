const state = {
  news: []
}

const getters = {
  getAllNews: (state) => {
    return state.news
  }
}

const actions = {
  async getNewsArray(context) {
    const {data} = await this.$axios.$get('/news');
    context.commit('setNews', [data])
    return data;
  },

  async getNewsByIdApi({commit}, id) {
    const {data}= await this.$axios.$get(`/news/show/${id}`);
    return data;
  },
}

const mutations = {
  setNews: (state, [data = null]) => {
    if (data) {
      state.news = data
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
