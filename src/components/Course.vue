<template>  
  <tr>
    <td>{{ course.name }}</td>
    <td>{{ course.credits }}</td>
    <td>{{ course.grade }}</td>
    <td><button @click="$emit('delete-course')">Quitar</button></td>
  </tr>
</template>

<script>
export default {
  name: 'course',
  props: [ 'course' ]
}
</script>