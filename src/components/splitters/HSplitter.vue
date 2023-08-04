<script setup>

const props = defineProps({
  width: {
    type: String,
    default : "2em"
  },

})

</script>

<template>
  <div :class="hSplitter.split"></div>
</template>

<style module = "hSplitter">

.split{
  width: v-bind("props.width");
  height: 100%;
}

</style>