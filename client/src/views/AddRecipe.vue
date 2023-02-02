<template>
  <div class="main-wrapper">
    <header-view />

    <div class="add-recipe d-flex justify-content-center align-items-center">
      <form class="col-lg-2">
        <h3 class="pt5">Add a recipe</h3>
        <div class="form-group">
          <label for="exampleFormControlInput1">Recipe title</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Title"
            v-model="title"
          />
        </div>
        <div class="form-group pt-3">
          <label for="exampleFormControlInput1">Where recipe originates</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Add country"
            v-model="country"
          />
        </div>
        <div class="form-group pt-3">
          <label for="exampleFormControlInput1">Dish description</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="description"
            v-model="description"
          />
        </div>
        <div class="form-group pt-3">
          <label for="exampleFormControlTextarea1">Ingredients</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model="ingredients"
          ></textarea>
        </div>
        <div class="form-group pt-3">
          <label for="exampleFormControlTextarea1">Directions</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model="directions"
          ></textarea>
        </div>
        <form enctype="multipart/form-data">
          <input
            class="pt-3"
            type="file"
            ref="image"
            name="image"
            show-size
            accept="image/png, image/jpg, image/webp"
            @change="selectFile"
          />
        </form>

        <div class="button-wrapper mt-3">
          <button
            @click.prevent="addPost()"
            type="submit"
            class="btn btn-success mx-3"
          >
            Add recipe
          </button>
          <router-link :to="{ name: 'Home' }">
            <button class="btn btn-danger">cancel</button>
          </router-link>
        </div>
      </form>
    </div>
    <FooterView />
  </div>
</template>

<script>
import HeaderView from './../components/HeaderView.vue';
import FooterView from './../components/FooterView.vue';
import axios from 'axios';
export default {
  components: {
    HeaderView,
    FooterView,
  },
  data() {
    return {
      title: '',
      country: '',
      description: '',
      ingredients: '',
      directions: '',
      image: '',
    };
  },
  methods: {
    async addPost() {
      try {
        const formData = new FormData();
        formData.append('image', this.image);
        formData.append('title', this.title);
        formData.append('country', this.country);
        formData.append('description', this.description);
        formData.append('ingredients', this.ingredients);
        formData.append('directions', this.directions);

        await axios.post(
          'https://recipenode.themikk.ee/api/v1/posts',
          formData,
          {
            withCredentials: true,
          }
        );
        // reset the form fields
        (this.title = ''),
          (this.country = ''),
          (this.description = ''),
          (this.ingredients = ''),
          (this.directions = ''),
          (this.image = '');
      } catch (err) {
        console.log(err);
      }
    },

    selectFile(image) {
      try {
        this.image = image.target.files[0];
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.add-recipe {
  height: 79vh;
}
</style>
>
