<template>  
  <div class="course">
    <div class="name"><p>{{ course.name }}</p></div>
    <div class="credits">{{ course.credits }}</div>
    <div class="grade">{{ course.grade }}</div>
    <div class="remove">
      <button @click="$emit('delete-course')">Quitar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'course',
  props: [ 'course' ]
}
</script>

<style scoped>

.course
{
  display: flex;
  width:100%;
  height:33.33%;
  border-bottom: 1px solid black;
}

.course div
{
  display: flex;
  justify-content: center;
  align-items: center;
  height:100%;
  border-left: 1px solid black;
}

.course div:first-child
{
  border-left:none;
}

.name
{
  width:50%;
}

.credits, .grade
{
  width:20%;
}

.remove
{
  width:10%;
}
</style>