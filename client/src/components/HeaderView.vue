<template>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark px-5 lead">
    <div class="logo-container px-5">
      <img src="./../photos/LOGO.webp" alt="" />
    </div>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#nav-menu"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="nav-menu">
      <h4 class="text-light">{{ message }}</h4>
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link text-danger">Home</router-link>
        </li>
        <li class="nav-item" v-if="isLogged">
          <router-link to="/addrecipe" class="nav-link text-danger"
            >Add Recipe</router-link
          >
        </li>

        <li class="nav-item" v-if="isLogged">
          <router-link to="/favouriterecipes" class="nav-link text-danger"
            >Favourite Recipes</router-link
          >
        </li>
        <li class="nav-item" v-if="!isLogged">
          <router-link to="/login" class="nav-link text-danger"
            >Login</router-link
          >
        </li>
        <li class="nav-item" v-if="isLogged">
          <router-link to="#" class="nav-link text-danger" @click="loggedOut()"
            >Logout</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'headerview',
  // checks if the token exists, commit the 'authorized' mutation to set the token in the store and update the authenticated state.
  created() {
    if (sessionStorage.getItem('super_trooper')) {
      this.$store.commit('authorized');
    }
  },
  // render elements depending the login state
  computed: {
    isLogged() {
      return this.$store.getters.isLoggedIn;
    },
    // renders the login message from backend
    message() {
      return this.$store.state.message;
    },
  },
  methods: {
    loggedOut() {
      this.$store.commit('logout');
      this.$router.push('/');
    },
  },
};
</script>

<style>
.logo-container img {
  width: 125px;
  height: auto;
}
</style>
