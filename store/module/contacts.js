const state = {
  contacts: []
}

const getters = {
  getAllContacts: (state) => {
    return state.contacts
  }
}

const actions = {
  async getContactsArray(context) {
    const {data} = await this.$axios.$get('/contacts');
    context.commit('setContacts', [data])
    return data;
  }
}

const mutations = {
  setContacts: (state, [data = null]) => {
    if (data) {
      state.contacts = data
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
