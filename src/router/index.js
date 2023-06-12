import { createRouter, createWebHistory } from 'vue-router';
// 1. Define route components.
import Home from '@/HelloWorld.vue';
import VerDatos from '@/VerDatos.vue';

// 2. Define some routes
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/VerDatos/:codigo',
      name: 'VerDatos',
      component: VerDatos,
      props: true,
    },
  ],
});

export default router;
