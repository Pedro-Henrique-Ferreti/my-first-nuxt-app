<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <app-control-input type="email" v-model="email">E-Mail Address</app-control-input>
        <app-control-input type="password" v-model="password">Password</app-control-input>
        <app-button type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</app-button>
        <app-button
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin">Switch to {{ isLogin ? 'Signup' : 'Login' }}</app-button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminAuthPage',
  layout: 'admin',
  data() {
    return {
      isLogin: true,
      email: '',
      password: '',
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('auth/authenticateUser', {
        isLogin: this.isLogin,
        email: this.email,
        password: this.password,
      })
      .then(() => this.$router.push('/admin'));
    },
  }
}
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>
