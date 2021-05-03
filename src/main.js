import Vue from 'vue';
import { VueMaskDirective } from 'v-mask';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import FirebaseVue from './plugins/firebase';

Vue.directive('mask', VueMaskDirective);

Vue.use(FirebaseVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
