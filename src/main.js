import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 按需引入viewUI组件库
import 'view-design/dist/styles/iview.css'
import { Icon, Input, Row, Col, Divider, Button, Avatar } from 'view-design'
// 引入MintUI组件库
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false

Vue.use(MintUI)
Vue.component('Icon', Icon)
Vue.component('Input', Input)
Vue.component('Row', Row)
Vue.component('Col', Col)
Vue.component('Divider', Divider)
Vue.component('Button', Button)
Vue.component('Avatar', Avatar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
