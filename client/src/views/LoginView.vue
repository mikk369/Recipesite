<template>
  <div class="main-wrapper">
    <header-view />
    <div class="form-wrapper d-flex align-items-center justify-content-center">
      <form class="col-lg-2">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="email"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            v-model="password"
          />
        </div>

        <button
          type="submit"
          class="btn btn-primary mx-3"
          v-on:click.prevent="submitLogin()"
        >
          Login
        </button>
        <router-link :to="{ name: 'Home' }">
          <button class="btn btn-danger">back</button>
        </router-link>
        <router-link class="px-3 link-options" :to="{ name: 'signup' }"
          >SignUp instead</router-link
        >
      </form>
    </div>
    <FooterView />
  </div>
</template>

<script>
import axios from 'axios';
import HeaderView from './../components/HeaderView.vue';
import FooterView from './../components/FooterView.vue';
export default {
  components: {
    HeaderView,
    FooterView,
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async submitLogin() {
      const response = await axios.post(
        'http://localhost:3000/api/v1/users/login',
        {
          email: this.email,
          password: this.password,
        }
      );
      console.log(response.data);
    },
  },
};
</script>
<style scoped>
.form-wrapper {
  height: 79vh;
}
.link-options {
  text-decoration: none;
}
</style>
