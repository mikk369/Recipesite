import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import store from './../store';
createApp(App).use(store).use(router).mount('#app');
