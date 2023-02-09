import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./../views/HomeView.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('./../views/SignUpView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./../views/LoginView.vue'),
  },
  {
    path: '/addrecipe',
    name: 'addrecipe',
    component: () => import('./../views/AddRecipe.vue'),
    meta: {
      requiredAuth: true,
    },
  },
  {
    path: '/recipe/:id',
    name: 'recipe',
    component: () => import('./../views/RecipiView.vue'),
  },
  {
    path: '/favouriterecipes',
    name: 'favouriterecipes',
    component: () => import('../views/FavouriteRecipes.vue'),
  },

];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiredAuth)) {
    if (!sessionStorage.getItem('super_trooper')) {
      next({
        patH: '/',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
