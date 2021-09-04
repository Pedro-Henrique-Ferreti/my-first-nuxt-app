export const state = () => ({
  loadedPosts: []
});

export const getters = {
  loadedPosts(state) {
    return state.loadedPosts;
  }
};

export const mutations = {
  setPosts(state, posts) {
    state.loadedPosts = posts;
  },
  addPost(state, post) {
    state.loadedPosts.push(post);
  },
  editPost(state, editedPost) {
    const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
    state.loadedPosts[postIndex] = editedPost;
  },
};

export const actions = {
  loadPosts(context, payload) {
    return this.$axios.$get('/posts.json')
    .then(data => {
      const posts = [];

      Object.keys(data).forEach(key => {
        const post = data[key];
        posts.push({
          id: key,
          ...post,
        });
      });

      context.commit('setPosts', posts);
    })
    .catch(error => console.log(error));
  },
  addPost(context, postData) {
    return this.$axios.$post(`/posts.json?auth=${context.rootGetters['auth/token']}`, postData)
    .then(data => {
      context.commit('addPost', { ...postData, id: data.name });
    })
    .catch(error => console.log(error));
  },
  editPost(context, editedPost) {
    return this.$axios.$put(
      `/posts/${editedPost.id}.json?auth=${context.rootGetters['auth/token']}`,
      editedPost
    )
    .then(data => {
      context.commit('editPost', data);
    });
    
  },
  setPosts(context, payload) {
    context.commit('setPosts', payload);
  }
};