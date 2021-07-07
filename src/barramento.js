import Vue from 'vue'

export default new Vue({
  methods: {
    alterarDia(dia) {
      this.$emit('diaMudou', dia)
    },
    diaDaPromocao(callback) {
      this.$on('diaMudou', callback)
    }
  }
})