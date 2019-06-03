<template>
  <div id="app">
    <header>
      Indice: {{ indice }}
    </header>
    <div class="terms">
      <term v-for="(term, index) in terms" :key="index" :term="term" @delete-term="remove(terms, term)" :remove="remove"></term>
    </div>
    <button class="new-term" @click="addTerm">+</button>
  </div>
</template>

<script>
import term from '@/components/Term.vue';

export default {

  name: 'app',
  components: { term },

  data() {
    return {
      terms: []
    }
  },

  methods: {

    remove(removeFrom, element) {
      removeFrom.splice(removeFrom.indexOf(element), 1);
    },

    addTerm() {
      this.terms.push({ name: `Trimestre ${this.terms.length+1}`, courses: [] });
    }
  },

  computed: {
    indice: function () {
      let total = this.terms.reduce((prev, act) => prev + act.courses.reduce((prev, act) => prev + act.grade*act.credits, 0), 0);
      let credits = this.terms.reduce((prev, act) => prev + act.courses.reduce((prev, act) => act.grade === 0 ? prev : prev + act.credits, 0), 0);

      return credits === 0 ? 0 : total/credits;
    }

  },

  created() {
    this.addTerm();
  }

};
</script>

<style scoped>

.app
{
  position:relative;
}

header
{
  align-items: center;
  background-color: #191919; 
  display:flex;
  color:#fff;
  font-size: 36px;
  height: 10vh;
  padding:0 10px;
}

.terms
{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 45vh;
  height: auto;
  width:100%;
  border-top:1px solid black;
}

.new-term
{
  border:none;
  border-radius: 50%;
  bottom:20px;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, .5);
  cursor:pointer;
  font-size:36px;
  height:50px;
  position:fixed;
  right:20px;
  width:50px;
  outline:none;
  z-index: 98;
}

.new-term:active
{
  bottom:18px;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, .5);
  right:18px;
}

</style>
