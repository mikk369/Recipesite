<template>
  <div id="app">
    <header-view />
    <router-view />
    <FooterView />
  </div>
</template>
<script>
import HeaderView from './components/HeaderView.vue';
import FooterView from './components/FooterView.vue';

export default {
  components: {
    HeaderView,
    FooterView,
  },
};
</script>
<style scoped></style>
