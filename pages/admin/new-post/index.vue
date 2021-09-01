<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <admin-post-form @submit="onSubmited" />
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import AdminPostForm from '@/components/Admin/AdminPostForm.vue';

export default {
  layout: 'admin',
  components: {
    AdminPostForm,
  },
  methods: {
    onSubmited(postData) {
      axios.post('https://nuxt-blog-1fa23-default-rtdb.firebaseio.com/posts.json', postData)
      .then(result => this.$router.push('/admin'))
      .catch(error => console.log(error));
    }
  },
}
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
