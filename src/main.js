import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lazy from 'vue-directive-lazy'

Vue.config.productionTip = false
Vue.use(lazy, {
  error: '',
  loading: ''
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
