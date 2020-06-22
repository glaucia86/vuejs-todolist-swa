<template>
  <div>
    <p class="tarefas">Tarefa(s) Concluída(s):
      {{ todos.filter(todo => { return todo.concluido === true }).length }}
    </p>
    <p class="tarefas">Tarefa(s) Pendente(s):
      {{ todos.filter(todo => { return todo.concluido === false }).length }}
    </p>
      <todo v-on:delete-todo="deleteTodo(todo)"
            v-on:complete-todo="completeTodo"
            v-for="todo in todos" :todo.sync="todo"
            v-bind:key="todo.value">
      </todo>
  </div>
</template>

<script src='./TodoList.js'></script>


<style scoped>

p.tarefas {
  text-align: center;
}

</style>
