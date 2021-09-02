import axios from 'axios';

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
    return axios.get(process.env.baseUrl + '/posts.json')
    .then(response => {
      const posts = [];

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
  addPost(context, postData) {
    return axios.post(process.env.baseUrl + '/posts.json', postData)
    .then(result => {
      context.commit('addPost', { ...postData, id: result.data.name });
    })
    .catch(error => console.log(error));
  },
  editPost(context, editedPost) {
    return axios.put(
      `${process.env.baseUrl}/posts/${editedPost.id}.json`,
      editedPost
    )
    .then(res => {
      context.commit('editPost', res.data);
    });
    
  },
  setPosts(context, payload) {
    context.commit('setPosts', payload);
  }
};