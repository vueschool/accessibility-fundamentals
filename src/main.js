import Vue from 'vue'
import App from './App.vue'
import scss from './scss/main.scss'

Vue.config.productionTip = false

new Vue({
  scss,
  render: h => h(App)
}).$mount('#app')
