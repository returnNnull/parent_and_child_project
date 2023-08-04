<script setup>

const props = defineProps({
  height: {
    type: String,
    default: "2em"
  }
})

</script>

<template>
<div :class="vSplitter.split"/>
</template>

<style module = 'vSplitter'>

.split{
  width: 100%;
  height: v-bind("props.height");
}
</style>