import Vue from 'vue';
import App from './App.vue';
import CmbVueRouter from './plugin'

Vue.config.productionTip = false;

Vue.use(CmbVueRouter);

new Vue({
  render: h => h(App),
}).$mount('#app');