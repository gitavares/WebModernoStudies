import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'

import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPPPPPP
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikdpc2VsbGUgVGF2YXJlcyIsImVtYWlsIjoiZ2l0YXZhcmVzQGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE1NDU3ODI5MDUsImV4cCI6MTU0NjA0MjEwNX0.yEZ-0Rd4u_-n0zINKnG5SDHoiVN6kwpqVNSNzEr8ECA'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')