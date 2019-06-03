<template>  
  <div class="course">
    <text-edit class="name" v-model="course.name"></text-edit>
    <number-edit class="credits" v-model="course.credits"></number-edit>
    <number-edit class="grade" v-model="course.grade"></number-edit>
    <button class="remove" @click="$emit('delete-course')">X</button>
  </div>
</template>

<script>
import TextEdit from "@/components/text-edit.vue";
import NumberEdit from "@/components/number-edit.vue";

export default {
  name: 'course',
  props: [ 'course' ],
  components: { TextEdit, NumberEdit }
}
</script>

<style scoped>

.course
{
  display: flex;
  width:100%;
  height:34%;
  border-bottom: 1px solid black;
  position: relative;
}

.course div
{
  height:100%;
  border-left: 1px solid black;
}

.course div:first-child
{
  border-left:none;
}

.name
{
  width:60%;
}

.credits, .grade
{
  width:20%;
}

.remove
{
  cursor:pointer;
  background:#e1e1e1;
  border:none;
  height:20px;
  left:0;
  position:absolute;
  top: 0;
  width:20px;
  z-index:99;
}
</style>