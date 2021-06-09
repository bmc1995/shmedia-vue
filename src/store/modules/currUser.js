const state = () => ({
  id: null,
  username: null,
});

const mutations = {
  setUsername(state, username) {
    return (state.username = username);
  },
};

export default {
  state,
  mutations,
};
