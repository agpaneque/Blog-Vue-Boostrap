<template>
  <!-- Responsive navbar-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link to="/home" class="navbar-brand">TonyWeb</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        v-on:click="toggleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent"
      v-bind:class="{ show: show }">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/home" class="nav-link" active-class="active"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/blog" class="nav-link" active-class="active" aria-current="page"
              >Blog</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" active-class="active"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link" active-class="active"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      show: false
    }
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show;
    }
}}
</script>

<style>

</style>