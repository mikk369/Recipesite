<template>
  <div>
    <!-- SHOWCASE  -->
    <section class="bg-dark text-light">
      <div class="wrapper-container d-flex flex-row flex-wrap">
        <div class="image-div col-lg-6 col-sm-6">
          <p class="fst-italic lead mb-5">
            “Tell me what you eat, and I will tell you who you are.”
          </p>
          <img
            src="./../photos/langing-pic.webp"
            alt="landing-picture"
            class="img-fluid align-self-center" />
        </div>
        <div class="main-text-container col-lg-6 col-sm-6">
          <h1 class="title-div">Easy <span class="text-danger">Recipes</span></h1>
          <div class="paragraph-div lead">
            A recipe is a set of instructions that describes how to prepare or make something,
            especially a dish of prepared food. A sub-recipe or subrecipe is a recipe for an
            ingredient that will be called for in the instructions for the main recipe.
          </div>
          <div class="button-wrapper d-flex">
            <router-link :to="{ name: 'signup' }">
              <button class="btn btn-danger signup-button">SignUp for Easy Recipes</button>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <!-- CARD-SECTION  -->
    <section class="bg-light p-5">
      <div class="row-col-1">
        <div class="cards d-flex flex-wrap">
          <CardView />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import axios from 'axios';
import CardView from './../components/CardView.vue';
export default {
  components: { CardView },
};
</script>

<style scoped>
.image-div img {
  max-width: 40%;
  border-radius: 10%;
  rotate: -10deg;
  display: inline-block;
}
.image-div {
  padding: 100px 0px 0px 200px;
}
.main-text-container {
  padding: 0px 200px 0px 0px;
}
.button-wrapper {
  justify-content: center;
  padding: 100px 0 30px 0;
}
.signup-button {
  padding: 10px;
  width: 200px;
}

/* remove padding when on sm screen  */
@media (max-width: 768px) {
  .main-text-container {
    padding: 30px 0px 30px 0px;
  }
  .title-div {
    text-align: center;
  }
}
/* remove padding when on sm screen  */
@media (max-width: 768px) {
  .image-div {
    padding: 0;
    text-align: center;
    padding-top: 30px;
  }
}
@media (max-width: 1200px) {
  .image-div {
    padding: 0;
    text-align: center;
    padding-top: 30px;
  }
}
@media (max-width: 425px) {
  .paragraph-div {
    text-align: center;
  }
}
</style>
