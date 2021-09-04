export const state = () => ({
  token: null,
});

export const getters = {
  token(state) {
    return state.token;
  }
};

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
};

export const actions = {
  authenticateUser(context, authData) {
    let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + process.env.fbApiKey;
    
    if (authData.isLogin) {
      authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + process.env.fbApiKey
    }

    return this.$axios.$post(authUrl, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true,
      }
    )
    .then(result => {
      context.commit('setToken', result.idToken);
    })
    .catch(error => {
      console.log(error);
    });
  }
}