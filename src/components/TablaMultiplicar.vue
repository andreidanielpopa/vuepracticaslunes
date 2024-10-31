<template>
  <div>
    <h1>Tabla Multiplicar</h1>
    <label for="">Escribe un numero:</label>
    <input type="number" v-model="numero" />
    <button @click="generarTabla()">Comprobar</button>
    <div id="contenedor">
      <div>
        <h4>Generada con boton</h4>
        <table border="1">
          <thead>
            <tr>
              <th>Operacion</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody v-html="html">

          </tbody>
        </table>
      </div>

      <div>
        <h4>Generada con directivas</h4>
        <table border="1">
          <thead>
            <tr>
              <th>Operacion</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="num in this.lista" :key="num">
              <td>{{ this.numero }} * {{ num }}</td>
              <td>{{ this.numero * num }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h4>Generada con filters</h4>
        <table border="1">
          <thead>
            <tr>
              <th>Operacion</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="num in this.lista" :key="num">
              <td v-html="$filters.getOperacion(numero, num)"></td>
              <td v-html="$filters.getMultiplicacion(numero, num)"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TablaMultiplicar",
  methods: {
    generarTabla() {
      var tabla = "";
      for (var i = 1; i <= 10; i++) {
        tabla += "<tr><td>" + this.numero + " * " + i + "</td>";
        tabla += "<td>" + this.numero * i + "</td></tr>";
      }
      this.html = tabla;
    },
  },
  data() {
    return {
      numero: 1,
      html: "",
      lista: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
};
</script>

<style>
#contenedor {
  display: flex;
  justify-content: center;
}

#contenedor > div {
  margin: 100px;
}
</style>