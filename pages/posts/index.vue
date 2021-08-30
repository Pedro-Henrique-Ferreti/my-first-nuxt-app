<template>
  <div class="posts-page">
    <post-list :posts="loadedPosts"/>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList.vue';

export default {
  name: 'index',
  components: {
    PostList,
  },
  async asyncData() {
    const response = await new Promise(resolve => {
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

        resolve(data);
      }, 3000);
    });

    return {
      loadedPosts: response,
    };
  }
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;  
}
</style>
