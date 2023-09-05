import { createRouter, createWebHistory } from 'vue-router'
import {authStatus} from '@/utils/auth'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/modules/main/main.vue'),
      meta: {
        requiresAuth : true,
      },
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/HomeView/HomeView.vue'),
          meta: {
            app_title : "Home",
            requiresAuth : true,
          }
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('@/views/AboutView/AboutView.vue'),
          meta: {
            app_title : "About",
            requiresAuth : true,
          }
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/modules/login/login.vue')
    },
  ],
  linkActiveClass: 'text-white',
  linkExactActiveClass: '',
})



//-------------------------------------------------------------------
router.beforeEach(async (to, from, next) => {
  if(to.matched.some((record) => record.meta.requiresAuth)){
    if(await authStatus()){
      next();
    }else{
      next("login");
    }
  }else{
    next();
  }
});


//-------------------------------------------------------------------

export default router
