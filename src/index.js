import Vue from 'vue';

import '@/filters/time.js';
import App from './components/App.vue';

import '@/assets/styles/index.css';

new Vue({
  render: (h) => h(App)
}).$mount('#app');

if (module.hot) {
  module.hot.accept();
}
