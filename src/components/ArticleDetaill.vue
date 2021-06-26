<template>
  <!-- Page content-->
  <div class="container mt-5">
    <div class="row" v-if="!article">
      <h3>No hay articulo con ese id</h3>
    </div>

    <div class="row" v-if="article">
      <div class="col-lg-8">
        <!-- Post content-->
        <article>
          <!-- Post header-->
          <header class="mb-4">
            <!-- Post title-->
            <h1 class="fw-bolder mb-1">{{ article.title }}</h1>
            <!-- Post meta content-->
            <div class="text-muted fst-italic mb-2">
              Posteado el
              {{ article.date | moment("dddd DD, MMMM yyyy") }}
            </div>
            <!-- Post categories-->
            <div
              class="float-left mb-3"
              v-for="categorie in categories"
              :key="categorie"
            >
              <router-link
                class="mr-2 badge bg-secondary text-decoration-none link-light"
                :to="{ path: /SearchByCategorie/ + categorie }"
              >
                {{ categorie }}
              </router-link>
            </div>
          </header>
          <!-- Preview image figure-->
          <figure class="mb-4">
            <img
              :src="url + 'get-img/' + article.image"
              :alt="article.title"
              v-if="article.image"
            />
            <img
              class="img-fluid rounded"
              src="https://dummyimage.com/900x400/ced4da/6c757d.jpg"
              alt="..."
              v-if="!article.image"
            />
          </figure>
          <!-- Post content-->
          <section class="mb-5">
            <p class="fs-5 mb-4">
              Science is an enterprise that should be cherished as an activity
              of the free human mind. Because it transforms who we are, how we
              live, and it gives us an understanding of our place in the
              universe.
            </p>
            <p class="fs-5 mb-4">
              The universe is large and old, and the ingredients for life as we
              know it are everywhere, so there's no reason to think that Earth
              would be unique in that regard. Whether of not the life became
              intelligent is a different question, and we'll see if we find
              that.
            </p>
          </section>
        </article>
        <!-- Comments section-->
        <section class="mb-5">
          <div class="card bg-light">
            <div class="card-body">
              <!-- Comment form-->
              <form class="mb-4">
                <textarea
                  class="form-control"
                  rows="3"
                  placeholder="Join the discussion and leave a comment!"
                ></textarea>
              </form>
              <!-- Single comment-->
              <div
                class="d-flex mt-4"
                v-for="comment in comments"
                :key="comment"
              >
                <div class="flex-shrink-0">
                  <img
                    class="rounded-circle"
                    src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                    alt="..."
                  />
                </div>
                <div class="ms-3">
                  <div class="fw-bold">{{ comment.idFrom }}</div>
                  {{ comment.commentary }}
                </div>
              </div>

              <!-- Comment with nested comments-->
              <div class="d-flex mb-4 mt-4">
                <!-- Parent comment-->
                <div class="flex-shrink-0">
                  <img
                    class="rounded-circle"
                    src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                    alt="..."
                  />
                </div>
                <div class="ms-3">
                  <div class="fw-bold">Commenter Name</div>
                  If you're going to lead a space frontier, it has to be
                  government; it'll never be private enterprise. Because the
                  space frontier is dangerous, and it's expensive, and it has
                  unquantified risks.
                  <!-- Child comment 1-->
                  <div class="d-flex mt-4">
                    <div class="flex-shrink-0">
                      <img
                        class="rounded-circle"
                        src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                        alt="..."
                      />
                    </div>
                    <div class="ms-3">
                      <div class="fw-bold">Commenter Name</div>
                      And under those conditions, you cannot establish a
                      capital-market evaluation of that enterprise. You can't
                      get investors.
                    </div>
                  </div>
                  <!-- Child comment 2-->
                  <div class="d-flex mt-4">
                    <div class="flex-shrink-0">
                      <img
                        class="rounded-circle"
                        src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                        alt="..."
                      />
                    </div>
                    <div class="ms-3">
                      <div class="fw-bold">Commenter Name</div>
                      When you put money directly to a problem, it makes a good
                      headline.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <!-- Side widgets-->
      <div class="col-lg-4">
        <!-- Search widget-->
        <SearchComponent />
        <!-- Categories widget-->
        <CategoriesComponent />
        <!-- Side widget-->
        <SideComponent />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Global from "../Global";
import SearchComponent from "./SearchComponent.vue";
import CategoriesComponent from "./CategoriesComponent.vue";
import SideComponent from "./SideComponent.vue";
export default {
  name: "ArticleDetaill",
  components: {
    SearchComponent,
    CategoriesComponent,
    SideComponent,
  },
  data() {
    return {
      id_desde_url: null,
      url: Global.url,
      article: null,
      categories: [],
      comments: [],
    };
  },
  methods: {
    getArticle() {
      axios.get(this.url + "article/" + this.id_desde_url).then((res) => {
        if (res.data.status == "success") {
          this.article = res.data.article;
          this.categories = this.article.categories.split(",");
          this.getComments();
        }
      });
    },
    getComments() {
      axios.get(this.url + "get-comments/" + this.id_desde_url).then((res) => {
        if (res.data.status == "success") {
          this.comments = res.data.comments;
        }
      });
    },
  },
  mounted() {
    window.scrollTo(0, 0);
     
   
  },
  created() {
    this.id_desde_url = this.$route.params.id;
    this.getArticle();
  },
};
</script>
<style>
img {
  max-height: 500px;
  width: auto;
}
</style>