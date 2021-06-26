<template>
  <!-- Blog post-->
  <div class="card mb-4" v-if="article">
     <router-link :to="{ path: '/ArticleDetaill' + '/' + article._id }" 
      >
    <img
        class="h-80 card-img-top card-img-top1"
        src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
        alt="..."
        v-if="!article.image"
    />
    <img
        class="h-80 card-img-top card-img-top1"
        :src="url + 'get-img/' + article.image" 
        :alt="article.title" 
        v-if="article.image"
    />
     </router-link>
    <div class="h-20 card-body">
      <div class="small text-muted">{{article.date | moment("from", "now")}}</div>
      <h2 class="card-title h4">{{article.title}}</h2>
      <p class="card-text">
        {{article.content}}
      </p>
     <router-link :to="{ path: '/ArticleDetaill' + '/' + article._id }" class="btn btn-primary">Read more →</router-link>
    </div>
  </div>

</template>

<script>
import Global from "../Global";

export default {
  name: "NonFeatured",
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

.card-img-top1{
  max-height: 177px;
  max-width: auto;
}
.small {
    height: 20px;
    margin-top: -10px;
}
</style>