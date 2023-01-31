<template>
  <div class="main-wrapper">
    <header-view />
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
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async signUp() {
      const response = await axios.post(
        'https://recipenode.themikk.ee/api/v1/users/signup',
        {
          username: this.username,
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
  justify-content: center;
  height: 79vh;
}
.link-options {
  text-decoration: none;
}
</style>
