import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: 'offer',
          component: () => import('../components/Home/Home/HomeItem.vue')
        },
        {
          path: '',
          component: () => import ('../components/Home/Goods/GoodsComp.vue')
        },
      ]
    },
    {
      path: '/product/:id',
      name: 'cardId',
      component: () => import('../views/ProductView.vue'),
      children: [
        {
          path: "/product/:id/item",
          name: 'CardIdName',
          component: () => import('../components/ProductPage/ProdFoot/ProodFootItem.vue') 
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import ('../views/LoginView.vue')
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import ('../views/ProductsView.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import ('../views/ProfileView.vue'),
      children: [
        {
          path: '',
          component: () => import('../components/ProfilePage/Profile/ProfileComp.vue')
        },
        {
          path: 'message',
          component: () => import('@/components/ProfilePage/Children/MessagesComp.vue')
        },
        {
          path: 'product',
          component: () => import('@/components/ProfilePage/Children/ProductComp.vue')
        },
        {
          path: 'settings',
          component: () => import('@/components/ProfilePage/Children/ChildrenItem.vue')
        },
        {
          path: 'login',
          component: () => import('@/components/ProfilePage/Children/LoginComp.vue')
        }
      ]
    },
    {
      path:'/add-product',
      name:'AddProducts',
      component: () => import("@/views/AddView.vue")
    }
  ]
})

export default router
