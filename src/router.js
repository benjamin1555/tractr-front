import { createRouter, createWebHistory } from 'vue-router';

const ProductsList = () => import('./pages/ProductsList.vue');
const ProductDetail = () => import('./pages/ProductDetail.vue');
const NotFound = () => import('./pages/NotFound.vue');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', component: ProductsList },
    { path: '/prodcuts/:id', component: ProductDetail },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;