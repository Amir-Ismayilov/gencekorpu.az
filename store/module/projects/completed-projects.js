const state = {
  completed_projects: []
}

const getters = {
  getAllCompletedProjects: (state) => {
    return state.completed_projects
  }
}

const actions = {
  async getCompletedProjectsArray(context) {
    const {data} = await this.$axios.$get('/completed-projects');
    context.commit('setCompletedProjects', [data])
    return data;
  },

  async getCurrentProjectsByIdApi({commit}, id) {
    const {data}= await this.$axios.$get(`/completed-projects/show/${id}`);
    return data;
  },
}

const mutations = {
  setCompletedProjects: (state, [data = null]) => {
    if (data) {
      state.completed_projects = data
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
