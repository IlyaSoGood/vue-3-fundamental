import Main from "@/pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import PostPage from "@/pages/PostPage.vue";
import About from "@/pages/About.vue";
import PostIdPage from "@/pages/PostIdPage.vue";
import PostPageWithStore from "@/pages/PostPageWithStore.vue";


//!Динамический импорт не работает

const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import(/* webpackChunkName: "main" */ '@/pages/Main.vue')
    },
    {
        path: '/posts',
        // component: PostPage
        name: 'posts',
        component: () => import(/* webpackChunkName: "posts" */ '@/pages/PostPage.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '@/pages/About.vue')
    },
    {
        path: '/posts/:id',
        // component: PostIdPage
        name: 'post-id',
        component: () => import(/* webpackChunkName: "post-id" */ '@/pages/PostIdPage.vue')
    },
    {
        path: '/store',
        // component: PostPageWithStore
        name: 'store',
        component: () => import(/* webpackChunkName: "store" */ '@/pages/PostPageWithStore.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;