<template>
  <!-- Featured blog post-->
  <div class="card mb-4">
    <router-link :to="{ path: '/ArticleDetaill' + '/' + article._id }">
      <img
        class="card-img-top"
        src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg"
        alt="..."
        v-if="!article.image"
      />
    </router-link>
    <router-link :to="{ path: '/ArticleDetaill' + '/' + article._id }">
      <img
        class="img-prue card-img-top img-fluid"
        :src="url + 'get-img/' + article.image"
        :alt="article.title"
        v-if="article.image"
      />
    </router-link>
    <div class="card-body">
      <div class="small text-muted">
        {{ article.date | moment("from", "now") }}
      </div>
      <h2 class="card-title">{{ article.title }}</h2>
      <p class="card-text">
        {{ article.content }}
      </p>
      <router-link
        :to="{ path: '/ArticleDetaill' + '/' + article._id }"
        class="btn btn-primary"
        >Read more →</router-link
      >
    </div>
  </div>
</template>

<script>
import Global from "../Global";
export default {
  name: "FeaturedComponent",
  props: {
    article: null,
  },
  data() {
    return {
      url: Global.url,
    };
  },
};
</script>

<style>
.img-prue {
  width: 100%;
  height: 250px;
}

@supports (object-fit: cover) {
  .img-prue img {
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
}
</style>