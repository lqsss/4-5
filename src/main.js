// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
//import Header from 'components/header'
import goods from './components/goods/goods.vue'
import ratings from './components/ratings/ratings.vue'
import seller from './components/seller/seller.vue'
import "./common/stylus/icon.styl"

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.config.productionTip = false



const routers = new VueRouter({
  routes:[
    { path: '/',
      redirect: '/goods'},
    {path:'/goods',component:goods},
    {path:'/seller',component:seller},
    {path:'/ratings',component:ratings},
  ],
  linkActiveClass: 'active'
})
//routers.push('/goods')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:routers,
  template: '<App/>',
  components: { App }
})
