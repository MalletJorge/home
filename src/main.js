import Vue from 'vue'
import './plugins/vuetify'
import VueAnalytics from 'vue-analytics'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(VueAnalytics, {
  id: 'UA-103612095-5'
})
