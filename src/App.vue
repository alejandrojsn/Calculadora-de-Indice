<template>
  <div id="app">
    Indice: {{ indice }}
    <div class="terms">
      <term v-for="(term, index) in terms" :key="index" :term="term" @delete-course="remove(term.courses, $event)" :remove="remove"></term>
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
          ]
        },
        {
          name: 'term 2',
          courses: [
            { name: 'Mate II', credits: 4, grade: 5 },
            { name: 'Lenguaje II', credits: 3, grade: 4}
          ]
        },
        {
          name: 'term 2',
          courses: [
            { name: 'Mate II', credits: 4, grade: 5 },
            { name: 'Lenguaje II', credits: 3, grade: 4}
          ]
        },
        {
          name: 'term 2',
          courses: [
            { name: 'Mate II', credits: 4, grade: 5 },
            { name: 'Lenguaje II', credits: 3, grade: 4}
          ]
        },
        {
          name: 'term 2',
          courses: [
            { name: 'Mate II', credits: 4, grade: 5 },
            { name: 'Lenguaje II', credits: 3, grade: 4}
          ]
        },
        {
          name: 'term 2',
          courses: [
            { name: 'Mate II', credits: 4, grade: 5 },
            { name: 'Lenguaje II', credits: 3, grade: 4}
          ]
        }
      ],
      newTermInput: ""
    }
  },

  methods: {

    remove(removeFrom, element) {
      removeFrom.splice(removeFrom.indexOf(element), 1);
    },

    termFactory(name) {
      return { name, courses: [] };
    }
  },

  computed: {
    indice: function () {
      let total = this.terms.reduce((prev, act) => prev + act.courses.reduce((prev, act) => prev + act.grade*act.credits, 0), 0);
      let credits = this.terms.reduce((prev, act) => prev + act.courses.reduce((prev, act) => act.grade === 0 ? prev : prev + act.credits, 0), 0);

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
  width:100%;
  border-top:1px solid black;
}

</style>
