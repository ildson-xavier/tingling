import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
// importando o router!
import VueRouter from 'vue-router';
import { routes } from './routes';

// Para criacao dos incoes
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBicycle, faTools, faAddressBook, faQuestionCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faBicycle, faTools, faAddressBook, faQuestionCircle)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Para criar os graficos
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts);



import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';

import './assets/css/sidebar.css';


const router = new VueRouter({
  routes : routes,
  mode: 'history'
});


// registrando o módulo/plugin no global view object
Vue.use(VueResource);
Vue.use(VueRouter);
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
