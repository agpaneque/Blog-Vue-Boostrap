<template>
  <div>
    <HeaderComponent
      msg="Bienvenidos a mi blog personal"
      info="Aqui encontraras Informacion importante."
    />
    <div class="container">
      <div class="row">
        <!-- Blog entries-->
        <div class="col-lg-8">
          <FeaturedComponent :article="FeaturedArticle" />
          <!-- Nested row for non-featured blog posts-->
          <div class="row" v-if="articles.length > 3">
            <div class="col-lg-6">
              <NonFeatured :article="articles[0]" />
              <!-- Blog post-->
              <NonFeatured :article="articles[2]" />
            </div>
            <div class="col-lg-6">
              <!-- Blog post-->
              <NonFeatured :article="articles[1]" />
              <!-- Blog post-->
              <NonFeatured :article="articles[3]" />
            </div>
          </div>
          <div class="row" v-if="articles.length <= 3">
            <h3>Ningun articulo para mostrar</h3>
          </div>
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
import HeaderComponent from "./HeaderComponent.vue";
import FeaturedComponent from "./FeaturedComponent.vue";

import NonFeatured from "./NonFeatured.vue";
import SearchComponent from "./SearchComponent.vue";
import CategoriesComponent from "./CategoriesComponent.vue";
import SideComponent from "./SideComponent.vue";

import axios from "axios";
import Global from "../Global";

export default {
  name: "Home",
  components: {
    FeaturedComponent,

    NonFeatured,
    SearchComponent,
    CategoriesComponent,
    SideComponent,
    HeaderComponent,
  },
  data() {
    return {
      articles: [],
      url: Global.url,
      FeaturedArticle: {},
    };
  },
  mounted() {
    this.LastArticles();
    this.GetFeaturedArticles();
  },
  methods: {
    LastArticles() {
      axios.get(this.url + "articles/last").then((res) => {
        if (res.data.status == "success") this.articles = res.data.articles;
      });
    },
    GetFeaturedArticles() {
      axios.get(this.url + "get-featured").then((res) => {
        if (res.data.status == "success") {
        this.FeaturedArticle = res.data.articles[res.data.articles.length-1];
        }
      });
    },
  },
};
</script>

<style>
</style>