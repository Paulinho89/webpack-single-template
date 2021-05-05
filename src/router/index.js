const Template = () => import(/* webpackChunkName: "index" */ "../page/index.vue");

const routes = [
    {
        path: "/",
        component: Template,
        meta: {
            title: "首页"
        }
    },
];

export default routes;
