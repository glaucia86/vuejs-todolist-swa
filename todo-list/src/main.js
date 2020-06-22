// @ts-nocheck
/**
 * Arquivo: main.js
 * Data: 22/06/2020
 * Descrição: arquivo responsável por lidar com toda a lógica de execução da app.
 * Author: Glaucia Lemos
 */
import Vue from 'vue';
import router from './router/index';
import App from './App.vue';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
