<template>
  <div>
    <label class="hola" v-bind:for="id" v-show="!active" @click="active = true">{{ object[property] }}</label>
    <input v-bind:id="id" v-show="active" type="text" v-model="object[property]" @keydown.enter="unactive" @blur="unactive">
  </div>
</template>

<script>
import {v4 as uuidv4} from 'uuid';

export default {
  name: 'text-edit',
  props: [ 'object', 'property', 'type' ],
  data(){
    return {
      active: false,
      id: uuidv4()
    }
  },
  methods: {
    unactive(){
      this.active = false;
    }
  }
}
</script>

<style scoped>

input
{
  width:100%;
  height:100%;
  font-family: Arial, Helvetica, sans-serif;
  font-size:16px;
  text-align: center;
}

label
{
  cursor: text;
}

</style>