<template>
  <section class="post-list">
    <post-preview v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :previewText="post.previewText"
      :thumbnail="post.thumbnail"  
      :isAdmin="isAdmin" 
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
    },
    posts: {
      type: Array,
      required: true,
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