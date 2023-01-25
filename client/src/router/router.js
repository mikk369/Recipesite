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
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
