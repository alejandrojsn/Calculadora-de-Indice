<template>
  <div>
    <label class="editable" @click="activate" :for="id">
      <span v-show="!active">{{ value }}</span>
      <input :id="id" v-show="active" type="text" v-model="modifiedValue" @keydown.enter="deactivate" @blur="deactivate" @keyup="$emit('input', modifiedValue)">
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
      id: uuidv4(),
      modifiedValue: this.value
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
  font-family: Arial, Helvetica, sans-serif;
  font-size:16px;
  height:100%;
  text-align: center;
  width:100%;
}

.editable
{
  align-items: center;
  cursor: text;
  display:flex;
  height:100%;
  justify-content: center;
  overflow:hidden;
  width:100%;
}

div
{
  height:100%;
  width:100%;
}

</style>