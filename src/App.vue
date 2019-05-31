<template>
  <div id="app">
    Indice: {{ indice }}
    <div class="terms">
      <term v-for="term in terms" v-bind:term="term" @delete-course="removeCourse" @delete-term="remove(terms, term)" @add-course="addCourse(term)"></term>
    </div>
    <div>
      <input type="text" v-model="newTermInput">
      <button @click="terms.push(termFactory(newTermInput)); newTermInput = ''">Añadir</button>
    </div>
  </div>
</template>

<script>
import term from '@/components/Term.vue';

export default {

  name: 'app',
  components: { term },

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
        },
        {
          name: 'term 2',
          courses: [
            { name: 'Mate II', credits: 4, grade: 5 },
            { name: 'Lenguaje II', credits: 3, grade: 4}
          ],
          newCourse: { name: "", credits: 0, grade: 0}
        },
        {
          name: 'term 2',
          courses: [
            { name: 'Mate II', credits: 4, grade: 5 },
            { name: 'Lenguaje II', credits: 3, grade: 4}
          ],
          newCourse: { name: "", credits: 0, grade: 0}
        },
        {
          name: 'term 2',
          courses: [
            { name: 'Mate II', credits: 4, grade: 5 },
            { name: 'Lenguaje II', credits: 3, grade: 4}
          ],
          newCourse: { name: "", credits: 0, grade: 0}
        },
        {
          name: 'term 2',
          courses: [
            { name: 'Mate II', credits: 4, grade: 5 },
            { name: 'Lenguaje II', credits: 3, grade: 4}
          ],
          newCourse: { name: "", credits: 0, grade: 0}
        },
        {
          name: 'term 2',
          courses: [
            { name: 'Mate II', credits: 4, grade: 5 },
            { name: 'Lenguaje II', credits: 3, grade: 4}
          ],
          newCourse: { name: "", credits: 0, grade: 0}
        }
      ],
      newTermInput: ""
    }
  },

  methods: {

    remove(removeFrom, element) {
      removeFrom.splice(removeFrom.indexOf(element), 1);
    },

    addCourse(term) {
      term.courses.push(Object.assign({}, term.newCourse));
    },

    termFactory(name) {
      return { name, courses: [], newCourse: { name: "", credits: 0, grade: 0 } }
    },

    removeCourse(term, course) {
      this.remove(term, course);
    }
  },

  computed: {
    indice: function () {
      let total = this.terms.reduce((prev, act) => prev + act.courses.reduce((prev, act) => prev + act.grade*act.credits, 0), 0);
      let credits = this.terms.reduce((prev, act) => prev + act.courses.reduce((prev, act) => prev+act.credits, 0), 0);

      return credits === 0 ? 0 : total/credits;
    }

  }

};
</script>

<style scoped>

.terms
{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 45vh;
  height: auto;
  width:100vw;
  border-top:1px solid black;
}

</style>
