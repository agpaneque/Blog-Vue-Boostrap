<template>
  <!-- Page header with logo and tagline-->
  <header class="py-5 bg-light border-bottom mb-4"
    v-bind:class="{ small: isSmall =='Si' }">
    <div class="container">
      <div class="text-center my-5">
        <h1 class="fw-bolder">{{msg}}</h1>
        <p class="lead mb-0">
         {{info}}
        </p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  components: {
    
  },
  props: {
    msg: String,
    isSmall: String,
    info: String
  },
};
</script>

<style>

</style>