import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/products'
  },
  {
    path: '/products',
    name: 'products',
    component: () => import( '../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/product/info/:id',
    name: 'productInfo',
    component: () => import( '../views/productInfoView.vue')
  },
  {
    path: '/shops',
    name: 'shops',
    component: () => import( '../views/shopsView.vue')
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import( '../views/articlesView.vue')
  },
  {
    path: '/user/:id',
    name: 'user',
    component: () => import( '../views/UserView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import( '../views/adminView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
