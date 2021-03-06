// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(ElementUI);
Vue.use(Vuex);
Vue.config.productionTip = false

const store =new Vuex.Store({
  state:{
    details:[],
    obj:{
      message:''
    }
  },
  mutations: {
    updateMessage (state, message) {
      state.obj.message = message
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
