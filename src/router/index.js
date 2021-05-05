const Template = () => import(/* webpackChunkName: "index" */ "@/page/index");

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
