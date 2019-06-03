<template>
<div class="term">
  <button class="remove" @click="$emit('delete-term')">X</button>
  <text-edit class="term-name" v-model="term.name"></text-edit>
  <div class="courses">
    <course v-for="(course, index) in term.courses" v-bind:key="index" v-bind:course="course" v-on:delete-course="$emit('delete-course', term.courses, course)"></course>
  </div>
  <div class="add" @click="$emit('add-course')">
    +
  </div>
</div>
</template>

<script>
import course from '@/components/Course.vue';
import textEdit from '@/components/text-edit.vue'

export default {
  name: 'term',
  props: [ 'term' ],
  components: { course, textEdit },
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
  position:relative;
}

.term:nth-child(5n)
{
  border-right:none;
}

.term:first-child
{
  border-left:none;
}

.term-name
{
  background-color:#f1f1f1;
  height:20%;
  width:100%;
}

.remove
{
  cursor:pointer;
  border:none;
  height:20px;
  position:absolute;
  right:0;
  top:0;
  width:20px;
  z-index: 99;
}

.courses
{
  border: 1px solid black;
  border-left:none;
  border-right:none;
  height:60%;
  overflow-y: auto;
  width:100%;
}

.add
{
  align-items: center;
  background-color:#f1f1f1;
  cursor:pointer;
  display: flex;
  height:20%;
  justify-content: center;
  font-size:24px;
  width:100%;
  transition: background-color .2s;
}

.add:hover
{
  font-size:32px;
  background-color:#ffffff;
}
</style>