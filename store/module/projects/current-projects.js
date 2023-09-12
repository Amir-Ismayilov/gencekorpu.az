const state = {
  current_projects: []
}

const getters = {
  getAllCurrentProjects: (state) => {
    return state.current_projects
  }
}

const actions = {
  async getCurrentProjectsArray(context) {
    const {data} = await this.$axios.$get('/current-projects');
    context.commit('setCurrentPojects', [data])
    return data;
  },

  async getCurrentProjectsByIdApi({commit}, id) {
    const {data}= await this.$axios.$get(`/current-projects/show/${id}`);
    return data;
  },
}

const mutations = {
  setCurrentPojects: (state, [data = null]) => {
    if (data) {
      state.current_projects = data
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
