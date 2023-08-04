<template class="wrapper">
  <div :class="editText.field">
    <p :class="editText.hint">{{ props.hint }}</p>
    <input :type="type" :value="text"  @input="$emit('update:text', $event.target.value)" />
  </div>
</template>

<script setup>

const props = defineProps({
  hint: String,
  text: String,
  type: {
    type : String,
    default: "text"
  }
})

defineEmits(['update:text'])


</script>


<style module="editText">

:root {
  --input-padding-left: 0.5em
}

.field {
  display: inline-flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  margin: 0.5em 0;

}

input {
  height: 100%;
  width: 100%;
  font-size: 1em;
  padding-top: 1.5em;
  padding-bottom: 0.5em;
  padding-left: var(--input-padding-left);
  border: var(--color-border) 1px solid;
  font-weight: 300;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}


input:focus {
  display: flex;
  outline: none;
  border: var(--primary-color) solid 2px;
  border-radius: 5px;
}


.hint {
  position: absolute;
  font-size: 1em;
  left: var(--input-padding-left);;
  top: 0;
  color: var(--color-border);
}

</style>