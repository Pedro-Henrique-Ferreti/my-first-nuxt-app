import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(context, payload) {
        return axios.get('https://nuxt-blog-1fa23-default-rtdb.firebaseio.com/posts.json')
        .then(response => {
          const posts = [];

          console.log(response.data);

          Object.keys(response.data).forEach(key => {
            const post = response.data[key];
            posts.push({
              id: key,
              ...post,
            });
          });

          context.commit('setPosts', posts);
        })
        .catch(error => console.log(error));
      },
      setPosts(context, payload) {
        context.commit('setPosts', payload);
      }
    }
  });
};

export default createStore;
