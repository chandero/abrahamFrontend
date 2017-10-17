// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import {store} from './store/store'

Vue.use(Vuetify)
Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

/*
* Axios default parameters
*/
Vue.axios.defaults.baseURL = `http://localhost:9000/api`

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
