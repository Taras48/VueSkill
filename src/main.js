import Vue from 'vue';
import App from './App.vue';
import someFunc from './functions';
import { someText, someData } from './data';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

someFunc.showMessage(someText, someData);
