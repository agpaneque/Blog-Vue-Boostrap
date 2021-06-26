<template>
  <!-- Search widget-->
  <div class="card mb-4">
    <div class="card-header">Search</div>
    <div class="card-body">
      <div class="input-group">
        <form class="col" @submit="Search">
        <input
          class="form-control float-left eighty"
          type="text"
          placeholder="Enter search term..."
          aria-label="Enter search term..."
          aria-describedby="button-search"
          v-model="idsearch"
          required
        />
        <button class="btn btn-primary float-left" id="button-search" type="submit">
          Go!
        </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchComponent",
  data() {
    return {
      idsearch: null,
      error: false,
    };
  },
  methods: {
    Search() {      
      if (!this.idsearch || this.idsearch == null) {
        this.error = true;
      }
       else{
          this.$router.push("/search/" + this.idsearch);
         }
    },
  },
};
</script>

<style>
.eighty {
    width: 80% !important;
  }
</style>