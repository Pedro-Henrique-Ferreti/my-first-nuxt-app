<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <post-list :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList.vue';

export default {
  name: 'index',
  components: {
    PostList,
  },
  async asyncData(context) {
    const result = await new Promise(resolve => {
      setTimeout(() => {

        // context.error(new Error('Promise error!'));
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
      }, 4000); 
    });

    return { loadedPosts: result };

    // setTimeout(() => {
    //   callback(null, {
    //     loadedPosts: [
    //       { 
    //         id: '1',
    //         title: 'First post',
    //         previewText: 'This is my first post',
    //         thumbnail: 'https://ibe.edu.br/wp-content/uploads/2019/12/big-tech.jpg'
    //       },
    //       { 
    //         id: '2',
    //         title: 'Second post',
    //         previewText: 'This is my second post',
    //         thumbnail: 'https://ibe.edu.br/wp-content/uploads/2019/12/big-tech.jpg'
    //       },
    //     ],
    //   });
    // }, 5000);
  },
}
</script>

<style scoped>
  .intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('assets/images/main-page-background.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>