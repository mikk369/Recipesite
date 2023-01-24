<template>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark px-5 lead">
    <div class="logo-container px-5">
      <img src="./../photos/LOGO.png" alt="" />
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
          <a href="#" class="nav-link">Login</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">SignUp</a>
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
