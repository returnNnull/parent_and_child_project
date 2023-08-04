<script setup>


import {ButtonStyle} from "@/components/inputs/buttons/ButtonStyle";
import {ButtonStyleFactory} from "@/components/inputs/buttons/ButtonStyleFactory";

const props = defineProps({
  style: {
    type: ButtonStyle,
    default: ButtonStyleFactory.createPrimary()
  },
  text: {
    type: String,
    default: "Button"
  }
})


</script>
<template>
  <div :class="functionalButton.container">
    <slot name="startIcon"/>
    <p :class="functionalButton.text">{{ props.text }}</p>
    <slot name="endIcon"/>
  </div>
</template>

<style module="functionalButton">

.container {
  display: inline-flex;
  justify-content: center;
  padding: 5px 10px;
  margin: 1em 0;
  align-items: center;
  background-color: v-bind('props.style.backgroundColor');
  border-radius: v-bind('props.style.radius');
  border: v-bind('props.style.borderColor') solid 2px;
}

.container:hover {
  cursor: pointer;
}

path {
  fill: v-bind('props.style.iconColor');

}

svg {
  width: 16px;
  height: 16px;
}


.text {
  display: inline-flex;
  justify-content: center;
  color: v-bind('props.style.textColor');
  margin: 0 0.5em;
}

</style>