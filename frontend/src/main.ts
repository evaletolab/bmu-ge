import Vue from 'vue';
import App from './App.vue';
import router from './router'
import { $config } from '@/services';

import '@fortawesome/fontawesome-free/css/all.css'
//import '@fortawesome/fontawesome-free/js/all.js'

import '/public/css/reset.css'
import '/public/css/dd_baselinev07.css'
import '/public/css/dd_uibitsv02.css'


Vue.config.productionTip = false



//
// load config before starting
const load = [$config.get()];

Promise.all(load)
.then(() => {
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
})
.catch(e => {
  console.log("error", e);
})
