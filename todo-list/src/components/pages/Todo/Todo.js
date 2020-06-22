/**
 *
 * Arquivo: src/components/pages/Todo/Todo.js
 * Data: 22/06/2020
 * Descrição: arquivo responsável por lidar com a lógica inerente ao componente 'Todo'.
 * Autora: Glaucia Lemos
 *
 */

export default {
  name: 'Todo',
  props: ['todo'],
  data() {
    return {
      ehEditavel: false,
    };
  },
  methods: {
    completeTodo(todo) {
      this.$emit('complete-todo', todo);
    },
    deleteTodo(todo) {
      this.$emit('delete-todo', todo);
    },
    abrirForm() {
      this.ehEditavel = true;
    },
    fecharForm() {
      this.ehEditavel = false;
    },
  },
};
