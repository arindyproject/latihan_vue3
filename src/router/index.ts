import { createRouter, createWebHistory } from 'vue-router'
import {authStatus} from '@/utils/auth'


const group_home = [
  {
    title     : "HOME",
    path_name : "home",
    icon      : ['fa', 'fa-home'],
    children  : []
  },
  {
    title     : "ABOUT",
    path_name : "about",
    icon      : ['fa', 'circle-info'],
    children  : []
  },
  {
    title     : "XXX",
    path_name : "aboutd",
    icon      : ['fa', 'circle-info'],
    children  : [
      {
        title     : "HOME",
        path_name : "home",
        icon      : ['fa', 'fa-home'],
      },
      {
        title     : "ABOUT",
        path_name : "about",
        icon      : ['fa', 'circle-info'],
      },
    ]
  }
];

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
            app_title     : "Home",
            menus         : group_home,
            requiresAuth  : true,
          }
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('@/views/AboutView/AboutView.vue'),
          meta: {
            app_title     : "About",
            menus         : group_home,
            requiresAuth  : true,
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
  linkActiveClass: 'active btn btn-outline-warning  rounded-pill',
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
