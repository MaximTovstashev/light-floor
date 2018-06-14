import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'

import path from 'path'

import i18next from 'i18next'
import VueI18Next from '@panter/vue-i18next'
import i18nBackendLoader from 'i18next-node-fs-backend'

import App from './App'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import {remote} from 'electron'

import './scss/main.scss'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(VueI18Next)
Vue.use(BootstrapVue)

const i18nPath = process.env.NODE_ENV === 'development'
  ? path.join(remote.app.getAppPath(), 'i18n')
  : path.join('i18n')

i18next
  .use(i18nBackendLoader)
  .init({
    lng: 'ru',
    fallbackLng: 'en',
    ns: ['workspace'],
    backend: {
      loadPath: path.join(i18nPath, '{{lng}}', '{{ns}}.json'),
      addPath: path.join(i18nPath, '{{lng}}', '{{ns}}-missing.json'),
      jsonIndent: 2
    }
  })

const i18n = new VueI18Next(i18next)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  i18n,
  template: '<App/>'
}).$mount('#app')
