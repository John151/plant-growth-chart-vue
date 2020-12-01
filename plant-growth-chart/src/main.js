import Vue from 'vue'
import App from './App.vue'
import PlantService from '@/services/PlantService'

Vue.prototype.$plant_record_api = PlantService


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
