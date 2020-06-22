/**
 * Arquivo: src/components/pages/CreateTodo/CreateTodo.js
 * Data: 22/06/2020
 * Descrição: arquivo responsável por lidar com a lógica inerente ao componente 'CreateTodo'.
 * Autora: Glaucia Lemos
 */

export default {
  name: 'CreateTodo',
  data() {
    return {
      textoTitulo: '',
      textoProjeto: '',
      foiCriado: false,
    };
  },
  methods: {
    abrirForm() {
      this.foiCriado = true;
    },
    fecharForm() {
      this.foiCriado = false;
    },
    enviarForm() {
      if (this.textoTitulo.length > 0 && this.textoProjeto.length > 0) {
        const titulo = this.textoTitulo;
        const projeto = this.textoProjeto;

        this.$emit('create-todo', {
          titulo,
          projeto,
          concluido: false,
        });
        this.textoTitulo = '';
        this.textoProjeto = '';
        this.foiCriado = false;
      }
    },
  },
};
