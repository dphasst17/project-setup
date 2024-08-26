<script setup lang="tsx">
const nuxtDemo = (a: number, b: number) => {
  return a + b
}
</script>
<template>
  <div>demo {{nuxtDemo(1, 2)}}</div>
</template>
