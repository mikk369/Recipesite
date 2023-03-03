<template>
  <div class="main-wrapper">
    <div class="errorWrapper" v-if="errorMsg">
      <p class="errorMsg">{{ errorMsg }}</p>
    </div>
    <div class="add-recipe d-flex justify-content-center align-items-center">
      <div v-if="Loading" class="loading-screen">
        <div class="loading-circle"></div>
      </div>
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
            @click.prevent="updatePost()"
            type="submit"
            class="btn btn-success mx-3"
          >
            Change
          </button>
          <router-link :to="{ name: 'Home' }">
            <button class="btn btn-danger">cancel</button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      title: '',
      country: '',
      description: '',
      ingredients: '',
      directions: '',
      image: '',
      errorMsg: '',
      Loading: false,
    };
  },
  async created() {
    const response = await axios.get(
      'http://localhost:3000/api/v1/posts/' + this.$route.params.id
    );
    (this.title = response.data.post.title),
      (this.country = response.data.post.country),
      (this.description = response.data.post.description),
      (this.ingredients = response.data.post.ingredients),
      (this.directions = response.data.post.directions),
      (this.image = response.data.post.image);
    console.log(response.data.post.title);
  },
  methods: {
    async updatePost() {
      this.Loading = true; // show the loading screen
      try {
        const token = sessionStorage.getItem('super_trooper');
        await axios.patch(
          'http://localhost:3000/api/v1/posts/' + this.$route.params.id,

          (this.title = response.data.post.title),
          (this.country = response.data.post.country),
          (this.description = response.data.post.description),
          (this.ingredients = response.data.post.ingredients),
          (this.directions = response.data.post.directions),
          (this.image = response.data.post.image),
          {
            // withCredentials: true,
            headers: {
              Authorization: `Bearer ${token}`, // send the JWT token in the request headers
            },
          }
        );
        console.log(formData);
      } catch (error) {
        this.errorMsg = error.response.data.error;
        console.log(`error ${error}`);
      }
      this.Loading = false; // hide the loading screen
      this.$router.push({ name: 'Home' });
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
  height: 80vh;
}
.errorWrapper {
  display: flex;
  justify-content: center;
  color: red;
}
.errorMsg {
  padding-top: 30px;
}
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-circle {
  display: inline-block;
  width: 80px;
  height: 80px;
  border: 6px solid #dc3545;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
>
