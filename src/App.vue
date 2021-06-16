<template>
<div>
  <NavbarComponent />
  <HeaderComponent />
  <div class="container">
    <router-view> </router-view>
  </div>
  <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
  },
};
</script>
<style>
@import "./assets/css/styles.css";
</style>
