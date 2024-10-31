import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

var app = createApp(App);

app.config.globalProperties.$filters = {
    parOImpar(numero) {
        var resultado = numero;
        if (numero % 2 == 0) {
            resultado = "<h1 style='color:green'>" + numero + "</h1>";
        } else {
            resultado = "<h1 style='color:red'>" + numero + "</h1>";
        }
        return resultado;
    },
    getOperacion(numero, num) {
        var operacion = '';
        operacion = '<td>' + numero + ' * ' + num + '</td>'
        return operacion;
    },
    getMultiplicacion(numero, num) {
        var resultado = '';
        resultado = '<td>' + numero * num + '</td>'
        return resultado;
    }
}

app.use(router).mount('#app');
