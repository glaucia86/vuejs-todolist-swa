<template>
  <div class="ui basic content center aligned segment">
    <button class="ui basic button icon" v-on:click="abrirForm" v-show="!foiCriado">
      <i class="plus icon"></i>
    </button>
    <div class="ui centered card" v-show="foiCriado">
      <div class="content">
        <div class="ui form">
          <div class="field">
            <label>Título</label>
            <input v-model="textoTitulo" type="text">
          </div>
          <div class="field">
            <label>Projeto</label>
            <input v-model="textoProjeto" type="text">
          </div>
          <div class="ui two button attached buttons">
            <button class="ui basic blue button" v-on:click="enviarForm()">Adicionar</button>
            <button class="ui basic red button" v-on:click="fecharForm()">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./CreateTodo" />

