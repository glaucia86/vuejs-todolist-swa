<template>
  <div class="ui centered card">
    <div class="content" v-show="!ehEditavel">
      <div class="header">{{ todo.titulo }}</div>
      <div class="meta">{{ todo.projeto }}</div>
      <div class="extra content">
        <span class="right floated edit icon" v-on:click="abrirForm">
          <i class="edit icon"></i>
        </span>
        <span class="right floated trash icon" v-on:click="deleteTodo(todo)">
          <i class="trash icon"></i>
        </span>
      </div>
    </div>
    <div class="content" v-show="ehEditavel">
      <div class="ui form">
        <div class="field">
          <label>Título</label>
          <input type="text" v-model="todo.titulo">
        </div>
        <div class="field">
          <label>Projeto</label>
          <input type="text" v-model="todo.projeto">
        </div>
        <div class="ui two button attached buttons">
          <button class="ui basic blue button" v-on:click="fecharForm">Fechar X</button>
        </div>
      </div>
    </div>
    <div
      class="ui bottom attached green basic button"
      v-show="!ehEditavel && todo.concluido"
      disabled
    >Concluído</div>
    <div
      class="ui bottom attached red basic button"
      v-on:click="completeTodo(todo)"
      v-show="!ehEditavel && !todo.concluido"
    >Pendente</div>
  </div>
</template>

<script src="./Todo.js"/>

