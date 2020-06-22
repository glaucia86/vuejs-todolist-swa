/**
 *
 * Arquivo: src/middlewares/router.js
 * Data: 25/12/2018
 * Descrição: arquivo responsável por lidar com todas as rotas da aplicação.
 * Autora: Glaucia Lemos
 *
 */

import Vue from 'vue';
import Router from 'vue-router';
// import TodoList from '@/components/pages/TodoList';
import TodoList from '../components/pages/TodoList/TodoList'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/todo-list', name: 'todo-list', component: TodoList },
  ],
});

export default router;
