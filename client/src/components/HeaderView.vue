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
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link to="/addrecipe" class="nav-link text-danger"
            >Add Recipe</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="#" class="nav-link text-danger"
            >Favourite Recipes</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="#" class="nav-link text-danger">Explore</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link text-danger"
            >Login</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link text-danger"
            >Logout</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
.logo-container img {
  width: 125px;
  height: auto;
}
</style>
