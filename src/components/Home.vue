<template>
    <div class="row">
      <h1>Home</h1>
      <!-- Blog entries-->
      <div class="col-lg-8">
        <FeaturedComponent />
        <!-- Nested row for non-featured blog posts-->
        <div class="row">
          <div class="col-lg-6">
            <NonFeatured />
            <!-- Blog post-->
            <NonFeatured />
          </div>
          <div class="col-lg-6">
            <!-- Blog post-->
            <NonFeatured />
            <!-- Blog post-->
            <NonFeatured />
          </div>
        </div>
        <PaginationComponet />
      </div>
      <!-- Side widgets-->
      <div class="col-lg-4">
        <SearchComponent />
        <CategoriesComponent />
        <SideComponent />
      </div>
    </div>
</template>

<script>
import FeaturedComponent from "./FeaturedComponent.vue";
import PaginationComponet from "./PaginationComponet.vue";
import NonFeatured from "./NonFeatured.vue";
import SearchComponent from "./SearchComponent.vue";
import CategoriesComponent from "./CategoriesComponent.vue";
import SideComponent from "./SideComponent.vue";
export default {
  name: "Home",
  components: {
    FeaturedComponent,
    PaginationComponet,
    NonFeatured,
    SearchComponent,
    CategoriesComponent,
    SideComponent,
  },
};
</script>
<style>

</style>