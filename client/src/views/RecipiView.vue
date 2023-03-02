<template>
  <div class="recipe-view">
    <div class="main-wrapper">
      <section class="d-flex justify-content-around p-5">
        <div class="row justify-content-center">
          <div class="container-image col-md-3">
            <div class="title-description">
              <h1>{{ title }}</h1>
              <p>{{ description }}</p>
            </div>
            <img
              crossorigin="true"
              class="rounded"
              :src="`${image}`"
              alt="food-picture"
            />
          </div>
          <div class="recipe-main-container col-md-3">
            <div class="recipe-container">
              <h1 class="recipe-class mb-3">Recipe</h1>
              <div class="ingredients-container border-bottom">
                <h4>ingredients</h4>
              </div>
              <div class="ingredients-container">
                <ul class="p-0 pt-3">
                  <li class="bg-light ingredients p-1 mb-4">
                    {{ ingredients }}
                  </li>
                </ul>
              </div>
              <div class="directions-container border-bottom">
                <h4 class="direction-class">Directions</h4>
              </div>
              <div class="directions-list">
                <ul class="p-0 pt-3">
                  <li class="bg-light ingredients p-1 d-block">
                    {{ directions }}
                  </li>
                </ul>
              </div>
              <router-link to="/">
                <button class="btn btn-success back-button">Back</button>
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'recipe',
  data() {
    return {
      id: '',
      title: '',
      country: '',
      description: '',
      ingredients: '',
      directions: '',
      image: '',
    };
  },
  async mounted() {
    try {
      const response = await axios.get(
        'http://localhost:3000/api/v1/posts/' + this.$route.params.id
      );
      this.id = response.data.post.id;
      this.title = response.data.post.title;
      this.country = response.data.post.country;
      this.description = response.data.post.description;
      this.ingredients = response.data.post.ingredients;
      this.directions = response.data.post.directions;
      this.image = response.data.post.image;
    } catch (err) {
      console.log(err);
    }
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
@media screen and (max-width: 768px) {
  .recipe-class {
    margin-top: 30px;
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 768px) {
  .direction-class {
    margin-top: 30px;
  }
}
.ingredients {
  list-style: none;
}
</style>
