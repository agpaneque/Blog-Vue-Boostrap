import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/Home.vue";
import Error from "./components/Error.vue";
import Blog from "./components/Blog.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";


Vue.use(VueRouter);

const routes = [

    {path: "/home",name: "home",component: Home},
    {path: "/blog",name: "blog",component: Blog},
    {path: "/about",name: "about",component: About},
    {path: "/contact",name: "contact",component: Contact},

    {path: '*', component: Error},
    {path: '/', component: Error},
  
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
