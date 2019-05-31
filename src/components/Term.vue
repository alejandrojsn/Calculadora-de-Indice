<template>
<ul>
  <li><b>{{ term.name }} <button @click="$emit('delete-term')">Quitar</button></b></li>
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
      <course v-for="course in term.courses" v-bind:course="course" v-on:delete-course="$emit('delete-course', term.courses, course)"></course>
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
          <button @click="$emit('add-course')">Añadir</button>
        </td>
      </tr>
    </tbody>
  </table>
</ul>
</template>

<script>
import course from '@/components/Course.vue';

export default {
  name: 'term',
  props: [ 'term' ],
  components: { course }
}
</script>