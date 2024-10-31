<template>
  <div>
    <h1>Collatz</h1>
    <label for="">Escribe un numero:</label>
    <input type="number" v-model="numero" />
    <button @click="conjeturaCollatz()">Comprobar</button>
    
    <ul id="collatz" v-for="num in listaNum" :key="num" v-html="$filters.parOImpar(num)">
        
    </ul>
  </div>
</template>

<script>
export default {
  name: "CollatzComponent",
  data() {
    return {
      numero: 0,
      listaNum: [],
    };
  },
  methods: {
    conjeturaCollatz() {
      this.html = "";
      this.listaNum = [];
      var num = this.numero;
      if (num === 0) {
        this.html = "No se puede hacer con 0";
      } else {
        do {
          if (num % 2 === 0) {
            num = num / 2;
          } else {
            num = num * 3 + 1;
          }
          this.listaNum.push(num);
        } while (num !== 1);
      }
    },
  },
};
</script>

<style>
ul#collatz li {
  display: inline;
}
</style>