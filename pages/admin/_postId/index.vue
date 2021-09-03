<template>
  <div class="admin-post-page">
    <section class="update-form">
      <admin-post-form :post="loadedPost" @submit="onSubimitted" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm.vue';

export default {
  layout: 'admin',
  components: {
    AdminPostForm,
  },
  async asyncData(context) {
    try {
      const data = await context.app.$axios.$get(
        `posts/${context.params.postId}.json`
      );

      return { loadedPost: data };
    }
    catch (error) {
      context.error(error);
    }
  },
  methods: {
    onSubimitted(editedPost) {
      this.$store.dispatch('posts/editPost', {
        ...editedPost,
        id: this.$route.params.postId
      })
      .then(() => {
        this.$router.push('/admin');
      });
    }
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
