<template>
  <div class="main-wrapper">
    <header-view />

    <div class="add-recipe d-flex justify-content-center align-items-center">
      <form class="col-lg-2">
        <h3>Add a recipe</h3>
        <div class="form-group">
          <label for="exampleFormControlInput1">Recipe title</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Title"
          />
        </div>
        <div class="form-group pt-3">
          <label for="exampleFormControlInput1">Where recipe originates</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Add country"
          />
        </div>
        <div class="form-group pt-3">
          <label for="exampleFormControlInput1">Dish description</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="description"
          />
        </div>
        <div class="form-group pt-3">
          <label for="exampleFormControlTextarea1">Ingredients</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="form-group pt-3">
          <label for="exampleFormControlTextarea1">Directions</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <form class="pt-3">
          <input
            type="file"
            id="fileInput"
            name="fileInput"
            accept="image/png, image/jpg"
          />
        </form>
        <div class="button-wrapper mt-3">
          <button type="submit" class="btn btn-success mx-3">Add recipe</button>
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
export default {
  components: {
    HeaderView,
    FooterView,
  },
};
</script>

<style scoped>
.add-recipe {
  height: 79vh;
}
</style>
>
