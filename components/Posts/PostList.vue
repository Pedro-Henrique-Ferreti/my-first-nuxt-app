<template>
  <section class="post-list">
    <post-preview
      :isAdmin="isAdmin" 
      id="1"
      title="Hello there!"
      previewText="This is my first post"
      thumbnail="https://ibe.edu.br/wp-content/uploads/2019/12/big-tech.jpg"  
    />
    <post-preview
      :isAdmin="isAdmin" 
      id="2"
      title="Hello there again!"
      previewText="This is my second post"
      thumbnail="https://ibe.edu.br/wp-content/uploads/2019/12/big-tech.jpg"  
    />
    <post-preview
      :isAdmin="isAdmin" 
      id="3"
      title="Hello there!"
      previewText="This is my third post"
      thumbnail="https://ibe.edu.br/wp-content/uploads/2019/12/big-tech.jpg"  
    />
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview.vue';

export default {
  components: {
    PostPreview,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>