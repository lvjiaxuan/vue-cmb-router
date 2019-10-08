import Vue from 'vue';
import App from './App.vue';
import CmbVueRouter, { cmbPush, CmbLink } from './plugin'

Vue.config.productionTip = false;

console.log({ cmbPush, CmbLink });
Vue.use(CmbVueRouter);

new Vue({
  render: h => h(App),
}).$mount('#app');