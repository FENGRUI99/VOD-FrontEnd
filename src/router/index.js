import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomeView from '../views/HomeView.vue'
import DetailView from "../views/DetailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: HomeView,
    },
    {
      path: '/HomeView',
      name: 'HomeView',
      component: HomeView,
      redirect: '/'
    },
    {
      path: '/detailView',
      name: 'DetailView',
      component: DetailView,
    }
  ]
})

export default router
