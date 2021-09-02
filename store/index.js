export const actions = {
  async nuxtServerInit(context) {
    return await context.dispatch('posts/loadPosts');
  }
}