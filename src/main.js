import Vue from 'vue';
import App from './App.vue';
import SomeFunc from './functions';
import { someText, someData } from './data';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

SomeFunc.showMessage(someText, someData);
