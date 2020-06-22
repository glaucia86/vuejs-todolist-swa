// @ts-nocheck
/**
 *
 * Arquivo: src/components/pages/TodoList/TodoList.js
 * Data: 22/06/2020
 * Descrição: arquivo responsável por lidar com a lógica inerente ao componente 'TodoList'
 * Autora: Glaucia Lemos
 *
 */
import sweetAlert from 'sweetalert';
import Todo from '../Todo/index.vue';

export default {
  name: 'TodoList',
  props: ['todos'],
  components: {
    Todo,
  },
  methods: {
    deleteTodo(todo) {
      sweetAlert({
        title: 'Você tem certeza que deseja excluir a Tarefa?',
        text: 'Atenção! Esta Tarefa será Excluída!',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      }).then((excluirTodo) => {
        if (excluirTodo) {
          const todoIndex = this.todos.indexOf(todo);
          this.todos.splice(todoIndex, 1);
          sweetAlert('Excluído!', 'Sua Tarefa foi Excluída', {
            icon: 'success',
          });
        } else {
          sweetAlert('Cancelado', 'Retornar para a Lista de Tarefas', 'error');
        }
        return false;
      });
    },
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].concluido = true;
      sweetAlert('Sucesso!', 'Parabéns! A sua Tarefa está Completa!', 'success');
    },
  },
};
