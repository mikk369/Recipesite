<template>
  <div class="main-wrapper">
    <ul class="d-flex justify-content-center errorMsg">
      <li>{{ errorMsg }}</li>
    </ul>
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
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      ifError: false,
      errorMsg: '',
    };
  },
  methods: {
    async submitLogin() {
      try {
        const response = await axios.post(
          'http://localhost:3000/api/v1/users/login',
          {
            email: this.email,
            password: this.password,
          }
          // {
          //   withCredentials: true,
          // }
        );

        this.$store.dispatch('getMessage', { message: response.data.message });
        sessionStorage.setItem('super_trooper', response.data.token);
        this.$store.commit('authorized');
        this.$router.push('/');
      } catch (err) {
        if (err.response.status === 400) {
          this.errorMsg = err.response.data.error;
        }
        if (err.response.status === 401) {
          this.errorMsg = err.response.data.message;
        }
      }
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
.errorMsg {
  position: absolute;
  color: red;
  padding-top: 30px;
  list-style-type: none;
  right: 44%;
}
</style>
