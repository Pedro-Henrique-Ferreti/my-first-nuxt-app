<template>
  <div class="posts-page">
    <post-list :posts="loadedPosts"/>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList.vue';

export default {
  name: 'index',
  // middleware: 'log',
  components: {
    PostList,
  },
  computed: {
    loadedPosts() {
      return this.$store.getters['posts/loadedPosts'];
    }
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
