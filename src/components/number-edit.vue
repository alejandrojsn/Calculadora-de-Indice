<template>
  <div>
    <label v-bind:for="id" v-show="!active" @click="active = !active">{{ object[property] }}</label>
    <input v-bind:id="id" v-show="active" type="number" min="0" v-model.number="object[property]" @keydown.enter="unactive" @keyup.backspace="preventZero" @blur="unactive" autofocus>
  </div>
</template>

<script>
import {v4 as uuidv4} from 'uuid';

export default {
  name: 'number-edit',
  props: [ 'object', 'property', 'type' ],
  data(){
    return {
      active: false,
      id: uuidv4()
    }
  },
  methods: {
    preventZero(){
      this.object[this.property] = this.object[this.property] === '' ? 0 : this.object[this.property];
      console.log(this.object[this.property])
    },
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