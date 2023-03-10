import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from "../views/DetailView.vue"
import SearchView from "../views/SearchView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: HomeView,
    },
    {
      path: '/homeView',
      name: 'HomeView',
      component: HomeView,
      redirect: '/'
    },
    {
      path: '/detailView/:id',
      name: 'DetailView',
      component: DetailView,
    },
    {
      path: '/searchView/',
      name: 'SearchView',
      component: SearchView,
    },
  ]
})

export default router
