const Template = () => import(/* webpackChunkName: "index" */ "@/page/index");
const IndexTest1 = () => import(/* webpackChunkName: "index-test1" */ "@/page/index-test1");
const IndexTest2 = () => import(/* webpackChunkName: "index-test2" */ "@/page/index-test2");
const IndexTest3 = () => import(/* webpackChunkName: "index-test3" */ "@/page/index-test3");
const IndexTest4 = () => import(/* webpackChunkName: "index-test4" */ "@/page/index-test4");
const IndexTest5 = () => import(/* webpackChunkName: "index-test5" */ "@/page/index-test5");
const IndexTest6 = () => import(/* webpackChunkName: "index-test6" */ "@/page/index-test6");
const IndexTest7 = () => import(/* webpackChunkName: "index-test7" */ "@/page/index-test7");
const IndexTest8 = () => import(/* webpackChunkName: "index-test8" */ "@/page/index-test8");
const IndexTest9 = () => import(/* webpackChunkName: "index-test9" */ "@/page/index-test9");

const routes = [
    {
        path: "/",
        component: Template,
        meta: {
            title: "首页"
        }
    },
    {
        path: "/test1",
        component: IndexTest1,
        meta: {
            title: "首页"
        }
    },
    {
        path: "/test2",
        component: IndexTest2,
        meta: {
            title: "首页"
        }
    },
    {
        path: "/test3",
        component: IndexTest3,
        meta: {
            title: "首页"
        }
    },
    {
        path: "/test4",
        component: IndexTest4,
        meta: {
            title: "首页"
        }
    },
    {
        path: "/test5",
        component: IndexTest5,
        meta: {
            title: "首页"
        }
    },
    {
        path: "/test6",
        component: IndexTest6,
        meta: {
            title: "首页"
        }
    },
    {
        path: "/test7",
        component: IndexTest7,
        meta: {
            title: "首页"
        }
    },
    {
        path: "/test8",
        component: IndexTest8,
        meta: {
            title: "首页"
        }
    },
    {
        path: "/test9",
        component: IndexTest9,
        meta: {
            title: "首页"
        }
    },
];

export default routes;
