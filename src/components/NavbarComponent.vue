<template>
  <!-- Responsive navbar-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link to="home" class="navbar-brand">TonyWeb</router-link>
      <b-button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </b-button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="home" class="nav-link" active-class="active"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="blog" class="nav-link" active-class="active" aria-current="page"
              >Blog</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="about" class="nav-link" active-class="active"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="contact" class="nav-link" active-class="active"
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
};
</script>

<style>
</style>