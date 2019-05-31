<template>
  <div id="app">
    Indice: {{ indice }}
    <ul v-for="term in terms">
      <li><b>{{ term.name }} <button @click="remove(terms, term)">Quitar</button></b></li>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Créditos</th>
            <th>Nota,</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="materia in term.courses">
            <td>{{ materia.name }}</td>
            <td>{{ materia.credits }}</td>
            <td>{{ materia.grade }}</td>
            <td><button v-on:click="remove(term.courses, materia)">Quitar</button></td>
          </tr>
          <tr>
            <td>
              <input type="text" v-model="term.newCourse.name">
            </td>
            <td>
              <input type="number" v-model.number="term.newCourse.credits">
            </td>
            <td>
              <input type="number" v-model.number="term.newCourse.grade">
            </td>
            <td>
              <button @click="addCourse(term)">Añadir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </ul>
    <div>
      <input type="text" v-model="newTermInput">
      <button @click="add(terms, termFactory(newTermInput)); newTermInput = ''">Añadir</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data() {
    return {
      terms: [
        {
          name: 'term 1',
          courses: [
            { name: 'Mate I', credits: 4, grade: 5 },
            { name: 'Lenguaje I', credits: 3, grade: 5}
          ],
          newCourse: { name: "", credits: 0, grade: 0}
        }
      ],
      newTermInput: ""
    }
  },
  methods: {
    remove: function (removeFrom, element) {
      removeFrom.splice(removeFrom.indexOf(element), 1);
    },
    add: function (addTo, element) {
      addTo.push(element);
    },
    addCourse: function (term) {
      this.add(term.courses, Object.assign({}, term.newCourse));
    },
    termFactory: function (name) {
      return { name, courses: [], newCourse: { name: "", credits: 0, grade: 0 } }
    }
  },
  computed: {
    indice: function () {
      let total = this.terms.reduce((prev, act) => prev + act.courses.reduce((prev, act) => prev + act.grade*act.credits, 0), 0);
      let credits = this.terms.reduce((prev, act) => prev + act.courses.reduce((prev, act) => prev+act.credits, 0), 0);

      return credits === 0 ? 0 : total/credits;
    }
  }
}
</script>

<style>

</style>
