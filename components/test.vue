<template>
  <div @click="changeTest">
    {{ test }}
  </div>
</template>

<script setup lang="ts">
const { test, changeTest } = useTest()
</script>
