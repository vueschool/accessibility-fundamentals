import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import scss from './scss/main.scss'
import Vuelidate from 'vuelidate'
import VueMask from 'v-mask'

Vue.use(VueMask);
Vue.use(Vuelidate)
Vue.config.productionTip = false

Vue.directive('grid', {
  bind: function (el, binding) {
    let columns = binding.value
    el.style.display = 'grid'
    el.style.gridTemplateColumns = columns
  }
})

new Vue({
  router,
  store,
  scss,
  render: h => h(App)
}).$mount('#app')
