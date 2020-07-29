import Vue from 'vue'
import App from './App.vue'
import MyComponent from './lib/index.js';

Vue.use(MyComponent);

new Vue({
  el: '#app',
  render: h => h(App)
})
