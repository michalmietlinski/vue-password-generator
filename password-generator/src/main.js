// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    elements: 10,
    variants: 5
  },
  mutations: {
    elementsupdate (state, elements) {
      state.elements = elements
    },
    varinatsupdate (state, elements) {
      state.variants = elements
    }
  },
  actions: {
    updateNumber ({
      commit
    }, elements) {
      commit('elementsupdate', elements)
    },
    updateVariant ({
      commit
    }, elements) {
      commit('varinatsupdate', elements)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App
  }
})
