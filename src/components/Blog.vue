<template>
  <div>
    <div class="container">
      <div class="row">
        <!-- Blog entries-->
        <div class="col-lg-8">
          <!-- Nested row for non-featured blog posts-->
          <div class="row">
            <div
              class="col-lg-6"
              v-for="item in articleForPage"
              :key="item._id"
            >
              <NonFeatured :article="item" />
            </div>
          </div>
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="articles"
            align="center"
            @input="updateItems"
          >
          </b-pagination>
        </div>
        <!-- Side widgets-->
        <div class="col-lg-4">
          <SearchComponent />
          <CategoriesComponent />
          <SideComponent />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Global from "../Global";

import NonFeatured from "./NonFeatured.vue";
import SearchComponent from "./SearchComponent.vue";
import CategoriesComponent from "./CategoriesComponent.vue";
import SideComponent from "./SideComponent.vue";

export default {
  name: "Blog",
  components: {
    NonFeatured,
    SearchComponent,
    CategoriesComponent,
    SideComponent,
    
  },
  data() {
    return {
      articles: [],
      articleForPage: [],
      url: Global.url,
      perPage: 4,
      currentPage: 1,
    };
  },
  computed: {
    rows() {
      return this.articles.length;
    },
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    getArticles() {
      axios.get(this.url + "articles").then((res) => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
          this.updateItems();
        }
      });
    },
    updateItems() {
      this.articleForPage = this.articles.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
  },
};
</script>
<style>

</style>