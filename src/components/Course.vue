<template>  
  <div class="course">
    <text-edit class="name" v-bind:object="course" v-bind:property="'name'"></text-edit>
    <number-edit class="credits" v-bind:object="course" v-bind:property="'credits'"></number-edit>
    <number-edit class="grade" v-bind:object="course" v-bind:property="'grade'"></number-edit>
    <div class="remove">
      <button @click="$emit('delete-course')">Quitar</button>
    </div>
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

/* /deep/ input
{
  width:100%;
  height:100%;
}*/

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