import Vue from 'vue'
import App from './App.vue'
import VueGoogleCharts from 'vue-google-charts'
import Multiselect from 'vue-multiselect'

Vue.use(VueGoogleCharts)
Vue.config.productionTip = false
Vue.component('multiselect', Multiselect)

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
