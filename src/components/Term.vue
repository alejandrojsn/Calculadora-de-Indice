<template>
<div class="term">
  <button class="remove" @click="$emit('delete-term')">X</button>
  <text-edit class="term-name" v-model="term.name"></text-edit>
  <div class="courses" ref="courses">
    <course v-for="(course, index) in term.courses" :key="index" :course="course" @delete-course="remove(term.courses, course)"></course>
  </div>
  <div class="add" @click="addCourse(); scrollDown()">
    +
  </div>
</div>
</template>

<script>
import course from '@/components/Course.vue';
import textEdit from '@/components/text-edit.vue'

export default {
  name: 'term',
  props: [ 'term', 'remove' ],
  components: { course, textEdit },
  methods: {
    addCourse() {
      this.term.courses.push({ name: `Asignatura ${this.term.courses.length+1}`, credits: 0, grade: 0 });
    },
    scrollDown () {
      setTimeout(() => {
        let elem = this.$refs.courses;
        elem.scrollTop = elem.scrollHeight;
      }, 100);
    }
  }
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

@media screen and (min-width:1200px)
{
  .term:nth-child(5n)
  {
    border-right:none;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px)
{
  .term:nth-child(4n)
  {
    border-right:none;
  }

}

@media screen and (min-width: 768px) and (max-width: 991px)
{
  .term:nth-child(3n)
  {
    border-right:none;
  }

}

@media screen and (min-width: 576px) and (max-width: 767px)
{
  .term:nth-child(2n)
  {
    border-right:none;
  }

}

@media screen and (max-width: 575px)
{
  .term:nth-child(n)
  {
    border-right:none;
  }

}
</style>