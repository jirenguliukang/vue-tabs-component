import Tabs from './components/tabs'
import TabsHeader from './components/tabs-header'
import TabsBody from './components/tabs-body'
import TabsItem from './components/tabs-item'
import TabsPane from './components/tabs-pane'

import Vue from 'vue'
import App from './App.vue'
// import router from './router'
// import store from './store'
Vue.component ("Tabs" , Tabs)
Vue.component ("TabsHeader" , TabsHeader)
Vue.component ("TabsBody" , TabsBody)
Vue.component ("TabsItem" , TabsItem)
Vue.component ("TabsPane" , TabsPane)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
