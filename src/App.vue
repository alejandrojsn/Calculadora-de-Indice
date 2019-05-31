<template>
  <div id="app">
    Indice: {{ indice }}
    <ul v-for="trimestre in trimestres">
      <li><b>{{ trimestre.nombre }} <button @click="quitar(trimestres, trimestre)">Quitar</button></b></li>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Créditos</th>
            <th>Nota</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="materia in trimestre.materias">
            <td>{{ materia.nombre }}</td>
            <td>{{ materia.creditos }}</td>
            <td>{{ materia.nota }}</td>
            <td><button v-on:click="quitar(trimestre.materias, materia)">Quitar</button></td>
          </tr>
          <tr>
            <td>
              <input type="text" v-model="trimestre.nuevaMateria.nombre">
            </td>
            <td>
              <input type="number" v-model.number="trimestre.nuevaMateria.creditos">
            </td>
            <td>
              <input type="number" v-model.number="trimestre.nuevaMateria.nota">
            </td>
            <td>
              <button @click="añadirMateria(trimestre)">Añadir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </ul>
    <div>
      <input type="text" v-model="nuevoTrimestre">
      <button @click="añadir(trimestres, trimestreFactory(nuevoTrimestre)); nuevoTrimestre = ''">Añadir</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data() {
    return {
      message: 'Hola',
      trimestres: [
        {
          nombre: 'Trimestre 1',
          materias: [
            { nombre: 'Mate I', creditos: 4, nota: 5 },
            { nombre: 'Lenguaje I', creditos: 3, nota: 5}
          ],
          nuevaMateria: { nombre: "", creditos: 0, nota: 0}
        }
      ],
      nuevoTrimestre: ""
    }
  },
  methods: {
    quitar: function (quitarDe, elementoAQuitar) {
      quitarDe.splice(quitarDe.indexOf(elementoAQuitar), 1);
    },
    añadir: function (añadirA, nuevoElemento) {
      añadirA.push(nuevoElemento);
    },
    añadirMateria: function (trimestre) {
      this.añadir(trimestre.materias, Object.assign({}, trimestre.nuevaMateria));
    },
    trimestreFactory: function (nombre) {
      return { nombre, materias: [], nuevaMateria: { nombre: "", creditos: 0, nota: 0 } }
    }
  },
  computed: {
    indice: function () {
      let total = this.trimestres.reduce((prev, act) => prev + act.materias.reduce((prev, act) => prev + act.nota*act.creditos, 0), 0);
      let creditos = this.trimestres.reduce((prev, act) => prev + act.materias.reduce((prev, act) => prev+act.creditos, 0), 0);

      return creditos === 0 ? 0 : total/creditos;
    }
  }
}
</script>

<style>

</style>
