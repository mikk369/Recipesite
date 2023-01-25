<template>
  <div class="recipe-view">
    <header-view />
    <div class="main-wrapper">
      <section class="d-flex justify-content-around p-5">
        <div class="row">
          <div class="container-image col-md-6">
            <div class="title-description">
              <h1>Recipe title</h1>
              <p>dish description</p>
            </div>
            <img
              class="rounded"
              src="./../photos/food-1.webp"
              alt="food-picture"
            />
          </div>
          <div class="recipe-main-container col-md-6">
            <div class="recipe-container">
              <h1 class="">Recipe</h1>
              <div class="ingredients-container border-bottom">
                <h4>ingredients</h4>
              </div>
              <div class="ingredients-container">
                <ul class="p-0 pt-3">
                  <li class="bg-light ingredients p-1">ingredients</li>
                  <li class="bg-light ingredients p-1">ingredients</li>
                  <li class="bg-light ingredients p-1">ingredients</li>
                  <li class="bg-light ingredients p-1">ingredients</li>
                  <li class="bg-light ingredients p-1">ingredients</li>
                </ul>
              </div>
              <div class="directions-container border-bottom">
                <h4>Directions</h4>
              </div>
              <div class="directions-list">
                <ul class="p-0 pt-3">
                  <li class="bg-light ingredients p-1">Directions</li>
                  <li class="bg-light ingredients p-1">Directions</li>
                  <li class="bg-light ingredients p-1">Directions</li>
                  <li class="bg-light ingredients p-1">Directions</li>
                  <li class="bg-light ingredients p-1">Directions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <FooterView />
  </div>
</template>

<script>
import HeaderView from './../components/HeaderView.vue';
import FooterView from './../components/FooterView.vue';
export default {
  components: {
    HeaderView,
    FooterView,
  },
};
</script>

<style>
.main-wrapper {
  min-height: 100vh;
}
.container-image img {
  max-width: 80%;
}
.ingredients {
  list-style: none;
}
</style>
