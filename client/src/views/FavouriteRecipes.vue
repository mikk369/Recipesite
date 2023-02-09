<template>
  <div class="favourite-recipe">
    <section class="bg-light p-5 main-section">
      <div class="row-col-1">
        <div class="cards d-flex flex-wrap">
          <div class="card mx-auto col-md-12" style="width: 18rem">
            <img src="./../photos/food-1.webp" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div class="d-flex lower-card justify-content-around">
                <a href="#" class="btn btn-primary">See recipe</a>
                <p class="my-2 flex-start">Likes</p>
              </div>
            </div>
          </div>
          <div class="card mx-auto col-md-12" style="width: 18rem">
            <img src="./../photos/food-2.webp" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div class="d-flex lower-card justify-content-around">
                <a href="#" class="btn btn-primary">See recipe</a>
                <p class="my-2 flex-start">Likes</p>
              </div>
            </div>
          </div>
          <div class="card mx-auto col-md-12" style="width: 18rem">
            <img src="./../photos/food-3.webp" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div class="d-flex lower-card justify-content-around">
                <a href="#" class="btn btn-primary">See recipe</a>
                <p class="my-2 flex-start">Likes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {};
</script>

<style>
.main-section {
  min-height: 100vh;
}
.card-img-top {
  height: 190px;
  object-fit: cover;
}
.card {
  box-shadow: 0 3px 10px 2px rgba(0, 0, 0, 0.3);
}
</style>
