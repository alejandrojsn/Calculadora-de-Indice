<template>
<div class="term">
  <div>
    <b>{{ term.name }} <button @click="$emit('delete-term')">Quitar</button></b>
  </div>
  <div class="courses">
    <course v-for="course in term.courses" v-bind:course="course" v-on:delete-course="$emit('delete-course', term.courses, course)"></course>
  </div>
  <div>
    <div>
      <input type="text" v-model="term.newCourse.name">
    </div>
    <div>
      <input type="number" v-model.number="term.newCourse.credits">
    </div>
    <div>
      <input type="number" v-model.number="term.newCourse.grade">
    </div>
    <div>
      <button @click="$emit('add-course')">Añadir</button>
    </div>
  </div>
</div>
</template>

<script>
import course from '@/components/Course.vue';

export default {
  name: 'term',
  props: [ 'term' ],
  components: { course }
}
</script>

<style scoped>

.term
{
  display:flex;
  flex-direction: column;
  height:100%;
  width: 100%;
  overflow:hidden;
  border:1px solid black;
  border-left: none;
  border-top: none;
}

.term:nth-child(5n)
{
  border-right:none;
}

.term:first-child
{
  border-left:none;
}

.courses
{
  height:60%;
  width:100%;
  border: 1px solid black;
  border-left:none;
  border-right:none;
}
</style>