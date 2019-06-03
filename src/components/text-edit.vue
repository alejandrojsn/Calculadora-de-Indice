<template>
  <div>
    <label class="editable" @click="activate" v-bind:for="id">
      <span v-show="!active">{{ value }}</span>
      <input v-bind:id="id" v-show="active" type="text" v-model="value" @keydown.enter="deactivate" @blur="deactivate" @keyup="$emit('input', value)">
    </label>
  </div>
</template>

<script>
import {v4 as uuidv4} from 'uuid';

export default {
  name: 'text-edit',
  props: [ 'value' ],
  data(){
    return {
      active: false,
      id: uuidv4()
    }
  },
  methods: {
    activate(){
      this.active = true;
    },
    deactivate(){
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

.editable
{
  cursor: text;
  display:flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height:100%;
}

div
{
  width:100%;
  height:100%;
}

</style>