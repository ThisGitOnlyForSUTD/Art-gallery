import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles/main.scss'
import '@/assets/styles/reset.scss'
import '@/assets/styles/fonts.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
