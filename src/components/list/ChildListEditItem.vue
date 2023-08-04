<script setup>
import EditText from "@/components/inputs/EditText.vue";
import FunctionalButton from "@/components/inputs/buttons/FunctionalButton.vue";
import {ButtonStyleFactory} from "@/components/inputs/buttons/ButtonStyleFactory";
import HSplitter from "@/components/splitters/HSplitter.vue";
import {toRef} from "vue";


const props = defineProps({
  item: {
    type: Object,
    default :() => ({
      id: "",
      name: "",
      age: ""
    })
  }
})

defineEmits(['deleted']);


const itemRef = toRef(props, 'item')

</script>

<template>
  <div :class="childListItem.wrapper">
    <edit-text hint="Имя" v-model:text="itemRef.name"/>
    <h-splitter width="2em"/>
    <edit-text hint="Возраст" v-model:text="itemRef.age" type="number"/>
    <functional-button :style="ButtonStyleFactory.createTextButton()" text="Удалить" @click = "$emit('deleted', itemRef.id)"/>
  </div>
</template>

<style module="childListItem">

.wrapper {
  display: flex;
}

edit-text{
  margin-right: 1em;
}

</style>