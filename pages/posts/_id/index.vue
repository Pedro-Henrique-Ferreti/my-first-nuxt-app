<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">Last updated on {{ loadedPost.updatedDate }}</div>
        <div class="post-detail">Written by {{ loadedPost.author }}</div>
      </div>
      <p class="post-content">{{ loadedPost.content }}</p>
    </section>
    <section class="post-feedback">
      Let me know what you think of the post, send a mail to <a href="mailto:feedback@domain.com">feedback@domain.com</a>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const result = await new Promise(resolve => {
      setTimeout(() => {
        resolve({
          id: '1',
          title: `First Post with ID: ${context.params.id}`,
          author: 'Pedro Henrique',
          updatedDate: new Date().getFullYear(),
          content: 'This is my first post! I hope you like it.',
          thumbnail: 'https://ibe.edu.br/wp-content/uploads/2019/12/big-tech.jpg',
        });
      }, 3000);
    });

    return {
      loadedPost: result,
    }
  },
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
