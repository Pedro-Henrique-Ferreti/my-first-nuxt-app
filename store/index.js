import Vuex from 'vuex';

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
        return new Promise(resolve => {
          setTimeout(() => {
            const data = [
              { 
                id: '1',
                title: 'First post',
                previewText: 'This is my first post',
                thumbnail: 'https://ibe.edu.br/wp-content/uploads/2019/12/big-tech.jpg'
              },
              { 
                id: '2',
                title: 'Second post and code review',
                previewText: 'This is my second post',
                thumbnail: 'https://ibe.edu.br/wp-content/uploads/2019/12/big-tech.jpg'
              },
            ];

            context.commit('setPosts', data);

            resolve();
          }, 4000); 
        });
      },
      setPosts(context, payload) {
        context.commit('setPosts', payload);
      }
    }
  });
};

export default createStore;
