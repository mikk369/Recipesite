<template>
  <div
    class="card mx-auto col-md-12"
    style="width: 18rem"
    v-for="post in posts"
    :key="post.id">
    <img
      crossorigin="true"
      :src="`${post.image}`"
      class="card-img-top"
      alt="the-food-picture" />

    <div class="card-body pb-0">
      <h5 class="card-title">{{ post.title }}</h5>
      <div class="card-text-wrapper pb-3">
        <p class="card-text">
          {{ post.description }}
        </p>
      </div>
      <div
        class="lower-card-wrapper d-flex justify-content-between align-items-center">
        <router-link :to="{ params: { id: post.id }, name: 'recipe' }">
          <a class="btn btn-primary">See recipe</a>
        </router-link>
        <span class="country">{{ post.country }}</span>
      </div>
      <div class="author-wrapper">
        <p class="username font-italic">author: {{ post.username }}</p>
        <button
          class="like-button"
          :class="{ clicked: liked }"
          @click="toggleLike">
          <i class="fas fa-thumbs-up"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  components: {},
  data() {
    return {
      id: '',
      posts: [],
    };
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/posts/', {
        // withCredentials: true,
      });
      this.posts = response.data.posts;
      this.id = response.data.posts.id;
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    toggleLike(post) {
      // Your code to toggle the like goes here
      post.liked = !post.liked;
    },
  },
  computed: {
    isLogged() {
      return this.$store.getters.isLoggedIn;
    },
  },
};
</script>

<style scoped>
.cards {
  gap: 50px;
}
.card-img-top {
  height: 190px;
  object-fit: cover;
}
.card-img-top:hover {
  height: 190px;
  object-fit: cover;
}
.card {
  box-shadow: 0 3px 10px 2px rgba(0, 0, 0, 0.3);
}

.card-text {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}
.card-text-wrapper {
  height: 150px;
}
.username {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 9px 0 9px 0;
  font-style: italic;
  margin: 0;
}
.author-wrapper {
  display: flex;
  justify-content: space-between;
  padding-bottom: 6px;
}
.country {
  text-align: center;
}
.like-button {
  border: none;
  border-radius: 9px;
  padding: 10px 20px 10px 20px;
}

.like-button:hover {
  transform: scale(1.1);
}
.like-button.clicked {
  background-color: #dc3545;
  animation: shake-lr 0.5s;
}
@keyframes shake-lr {
  0%,
  100% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }
  10% {
    -webkit-transform: rotate(8deg);
    transform: rotate(8deg);
  }
  20%,
  40%,
  60% {
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }
  30%,
  50%,
  70% {
    -webkit-transform: rotate(10deg);
    transform: rotate(10deg);
  }
  80% {
    -webkit-transform: rotate(-8deg);
    transform: rotate(-8deg);
  }
  90% {
    -webkit-transform: rotate(8deg);
    transform: rotate(8deg);
  }
}
</style>
