import Cookie from 'js-cookie';

export const state = () => ({
  token: null,
});

export const getters = {
  token(state) {
    return state.token;
  },
  isAuthenticated(state) {
    return state.token !== null;
  },
};

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  clearToken(state) {
    state.token = null;
  }
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
      localStorage.setItem('token', result.idToken);
      localStorage.setItem('tokenExpiration', new Date().getTime() + +result.expiresIn * 1000);
      Cookie.set('jwt', result.idToken);
      Cookie.set('expirationDate',  new Date().getTime() + +result.expiresIn * 1000);
    })
    .catch(error => {
      console.log(error);
    });
  },
  initAuth(context, req) {
    let token;
    let expirationDate;

    if (req) {
      if (!req.headers.cookie) {
        return;
      }

      const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='));
      
      if (!jwtCookie) {
        return;
      }
      
      token = jwtCookie.split('=')[1];
      expirationDate = req.headers.cookie.split(';').find(c => c.trim().startsWith('expirationDate=')).split('=')[1];
    }
    else {
      token = localStorage.getItem('token');
      expirationDate = localStorage.getItem('tokenExpiration');
    }
    if (new Date().getTime() > +expirationDate || !token) {
      context.dispatch('logout');
      return 
    }

    context.commit('setToken', token);
  },
  logout(context) {
    context.commit('clearToken');
    Cookie.remove('token');
    Cookie.remove('expirationDate');
    if (process.client) {
      localStorage.removeItem('token');
      localStorage.removeItem('tokenExpiration');
    }
  }
}