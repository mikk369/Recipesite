import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./../views/HomeView.vue'),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
