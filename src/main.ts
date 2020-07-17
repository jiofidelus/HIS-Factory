import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import RappidPlugin from '@/plugins/rappid';



// directives
import bg from './directives/generics/bg.directive'
import height from './directives/generics/height.directive'
import width from './directives/generics/width.directive'

Vue.directive('bg', bg)
Vue.directive('height', height)
Vue.directive('width', width)
Vue.config.productionTip = false
Vue.use(RappidPlugin);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
