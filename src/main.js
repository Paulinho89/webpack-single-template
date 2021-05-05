import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import routes from "./router/index";
import "./styles/normalize.css";
import "./styles/common.less";

const router = new VueRouter({
    mode: "history",
    routes
});

Vue.use(VueRouter);

new Vue({
    router,
    store
}).$mount("#app");
