<template>
  <div class="form-wrapper d-flex align-items-center justify-content-center">
    <form class="col-lg-2">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
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
        />
      </div>

      <button type="submit" class="btn btn-primary mx-3">Login</button>
      <router-link :to="{ name: 'Home' }">
        <button class="btn btn-danger">back</button>
      </router-link>
    </form>
  </div>
</template>

<script></script>
<style scoped>
.form-wrapper {
  height: 100vh;
}
</style>
