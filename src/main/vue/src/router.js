import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/hello',
    name: 'Hello',
    component: () => import('@/components/HelloWorld.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/components/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
