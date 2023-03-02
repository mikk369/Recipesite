<template>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark px-5 lead">
    <div class="logo-container px-5">
      <img src="./../photos/LOGO.webp" alt="" />
    </div>
    <h4 class="text-light login-message" v-if="message">{{ message }}</h4>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#nav-menu"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="nav-menu">
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
.login-message {
  background-color: rgba(6, 192, 0, 0.2);
  padding: 20px;
  border-radius: 9px;
  animation: loginMessage 3s ease-in-out forwards;
}

@keyframes loginMessage {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(-350px);
  }
}
</style>
