import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/Home.vue";
import Error from "./components/Error.vue";
import Blog from "./components/Blog.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import HelloWorld from "./components/HelloWorld.vue";
import ArticleDetaill from "./components/ArticleDetaill.vue";
import Search from "./components/Search.vue";
import SearchByCategorie from "./components/SearchByCategorie.vue";

Vue.use(VueRouter);

const routes = [

    {path: "/home",name: "home",component: Home},
    {path: "/blog",name: "blog",component: Blog},
    {path: "/about",name: "about",component: About},
    {path: "/contact",name: "contact",component: Contact},
    {path: "/HelloWorld",name: "HelloWorld",component: HelloWorld},
    {path: "/ArticleDetaill/:id",name: "ArticleDetaill",component: ArticleDetaill},
    {path: "/Search/:idsearch",name: "Search",component: Search},
    {path: "/SearchByCategorie/:idsearch",name: "sbc",component: SearchByCategorie},

    {path: '*', component: Error},
    {path: '/', component: Home},
  
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
