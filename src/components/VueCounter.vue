<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button style="display: inline-block;
  padding-right: 4px;
  padding-left: 4px;
  border-style: solid;
  border-radius: 4px;
  border-width: 1px;
  border-color: #42B883;
  background: revert;
" @click="count++">Clicked {{ count }} {{ count === 1 ? "time" : "times" }}</button>
</template>
