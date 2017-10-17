import Vue from 'vue'
import Vuex from 'vuex'
import solicitud from './module/solicitud'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    solicitud
  }
})
