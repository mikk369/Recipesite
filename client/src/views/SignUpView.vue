<template>
  <div class="main-wrapper">
    <div class="form-wrapper d-flex align-items-center">
      <form class="col-lg-2 form-class">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Username</label>
          <input
            type="text"
            class="form-control mb-3"
            id="exampleInputUser1"
            aria-describedby="userlHelp"
            v-model="username"
          />
          <label for="exampleInputUser1" class="form-label"
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
          v-on:click.prevent="signUp()"
        >
          SignUp
        </button>
        <router-link :to="{ name: 'Home' }">
          <button class="btn btn-danger">back</button>
        </router-link>
        <router-link class="px-3 link-options" :to="{ name: 'login' }"
          >Login instead</router-link
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
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async signUp() {
      try {
        await axios.post('http://localhost:3000/api/v1/users/signup', {
          username: this.username,
          email: this.email,
          password: this.password,
        });
        (this.username = ''), (this.email = ''), (this.password = '');
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style scoped>
.form-wrapper {
  justify-content: center;
  height: 79vh;
}
.link-options {
  text-decoration: none;
}
</style>
